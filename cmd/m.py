#coding:utf-8

import sys
import os
import shutil
import re
import linecache

def main(base_file, new_file):
  define_regex = r'#\s*ifn?(def)?\s+('\
  '1|'\
  '_SWEDLL_H'\
  ')'
  prototype_declaration_regex = r'\);\s*$'
  delete_flags = []
  struct_flag = False

  # get arg
  BASE_FILE = base_file
  TMP_FILE = 'tmp.js'
  NEW_FILE = new_file

  # prepare
  shutil.copyfile(BASE_FILE, NEW_FILE)
  if os.path.isfile(TMP_FILE):
    os.remove(TMP_FILE)

  # remove pre processor, #include
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'^\s*#\s*if(def)?\s+', line):
      if re.search(define_regex, line):
        delete_flags.append(False)
      else:
        delete_flags.append(True)
      continue
    elif re.search(r'^\s*#\s*ifndef\s+', line):
      if re.search(define_regex, line):
        delete_flags.append(True)
      else:
        delete_flags.append(False)
      continue

    if re.search(r'^\s*#\s*else', line):
      delete_flags[-1] = not(delete_flags[-1])
      continue

    if re.search(r'^\s*#\s*endif', line):
      delete_flags.pop()
      continue

    if re.search(r'^\s*#\s*include', line):
      continue

    if delete_flags.count(True) == 0:
      file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # remove prototype declaration, TLS, \r, \t, //comment
  # change TRUE, FALSE
  lines = file_get_contents(NEW_FILE)
  lines = re.sub(r'\r\n', "\n", lines)
  lines = re.sub(r'//[^\n]*', "", lines)
  lines = re.sub(r'\s*/\*([^/]|[^\*]/)*\*/', "", lines)
  lines = re.sub(r'\n(static\s+|extern\s+)?(\w+\s+)+\*?\w+\s*\([^\)]+\)\s*;', "", lines)
  lines = re.sub(r'.*extern.*\n', "\n", lines)
  lines = re.sub(r'(\n|\s)TLS\s', '\\1', lines)
  lines = re.sub(r'\t', " ", lines)
  lines = re.sub(r'(?<!\w)TRUE(?!\w)', "true", lines)
  lines = re.sub(r'(?<!\w)FALSE(?!\w)', "false", lines)
  lines = re.sub(r'(?<!\w)NULL(?!\w)', "null", lines)
  lines = re.sub(r'sprintf([^)]|\)[^;])+\);', "console.info('info')", lines)
  lines = re.sub(r'=\{0\}', "", lines)
  lines = re.sub(r',\s*\n', ",", lines)
  file_put_contents(NEW_FILE, lines, 'w')


  # change #define to const or function
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    while(True):
      # delete #define
      define = re.search(r'#\s*define\s+(\w+)\s*$', line)
      if define:
        line = False
        break

      # make const if "xxx" or (xxx) or number
      define = re.search(r'#\s*define[\s]+(\w+)\s+(struct\s+)?("[^"]*"|\([^\)]*\)|[\w\-\.+]+)(.*)', line)
      if define:
        line = "\nconst " + define.group(1) + " = " + define.group(3) + ";" + define.group(4) + "\n"
      define = re.search(r'#\s*define\s+(\w+)\s+\{([^\}]*)\}(.*)', line)
      if define:
        line = "\nconst " + define.group(1) + " = [" + define.group(2) + "];" + define.group(3) + "\n"

      # make function
      define = re.search(r'#\s*define\s+(\w+\([^\)]*\))\s+(.*)', line)
      if define:
        line = "\nfunction " + define.group(1) + "{\nreturn " + define.group(2) + ";\n}\n"
      break

    if not line == False: 
      file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  # change to 1 line
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'\n\s*([\|\&\+\-\(]|\*[^\w\(])', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  file_put_contents(NEW_FILE, lines, 'w')


  # change if, for, case
  lines = file_get_contents(NEW_FILE)
  # cut \n
  while True:
    lines2 = lines
    lines2 = re.sub(r'(if\s*\([^\{]+)\s*\n\s*([\|\&])', "\\1\\2", lines2)
    lines2 = re.sub(r'(else\s+if\s*\([^\{]+)\s*\n\s*([\|\&])', "\\1\\2", lines2)
    lines2 = re.sub(r'(for\s*\([^\{]+)\s*\n\s*([\|\&])', "\\1\\2", lines2)
    lines2 = re.sub(r'(case\s*\w+:)([^\n;]+)', "\\1\n\\2", lines2)
    if lines == lines2:
      break
    else:
      lines = lines2

  
  lines = re.sub(r'(if\s*\([^\{\n]+\))(\s*\n.*);\s*\n', "\\1{\n\\2;\n}\n", lines)
  lines = re.sub(r'(if\s*\([^\{\n]+\))(\s*\n.*)(\s*\n.*);\s*\n', "\\1{\n\\2\\3;\n}\n", lines)
  lines = re.sub(r'(else\s*if\s*\([^\{\n]+\))(\s*\n.*);\s*\n', "\\1{\n\\2;\n}\n", lines)
  lines = re.sub(r'(else\s*if\s*\([^\{\n]+\))(\s*\n.*)(\s*\n.*);\s*\n', "\\1{\n\\2\\3;\n}\n", lines)
  lines = re.sub(r'else(\s*\n.*);\s*\n', "else{\n\\1;\n}\n", lines)
  lines = re.sub(r'else(\s*\n.*)(\s*\n.*);\s*\n', "else{\n\\1\\2;\n}\n", lines)
  lines = re.sub(r'(for\s*\([^;]*;[^;]*;[^;]*\))\s*\n([^;]+;)\n', "\\1{\n\\2\n}\n", lines)
  lines = re.sub(r'}([^\n]*)', "}\n\\1", lines)
  file_put_contents(NEW_FILE, lines, 'w')


  # change "static const struct" to Map 
  # change to 1 line
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'(static const struct\s+\w+\s+\w+\[\][^\;]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  file_put_contents(NEW_FILE, lines, 'w')

  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'static const struct', line):
      
      line = re.sub(r'\{', '[', line)
      line = re.sub(r'\}', ']', line)
      line = re.sub(r',\s*\]\s*\;', '];', line)
      variable = re.search(r'(\w+)(?=\[\])', line).group(1)
      struct = re.search(r'(\w+)\s+\*?\w+(?=\[\])', line).group(1)
      line = re.sub(r'static const struct\s\w+\s+\*?\w+\[\]', 'var struct_data', line)
      line += "var struct_data_num = 0;"
      line += "\nvar " + variable + " = new Array(struct_data.length);"
      line += "\nfor(var i=0;i<struct_data.length;i++){" + variable + "[i]={};struct_data_num=0;" + struct + ".forEach(function(v,k,m){" + variable + "[i][k] = struct_data[i][struct_data_num];struct_data_num++})};\n" 
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  
  # change struct to Map
  # change to 1 line
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'(struct\s+\w+\s*\{[^\}]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  file_put_contents(NEW_FILE, lines, 'w')

  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'struct\s+\w+\s*\{', line):
      line = re.sub(r'\[[\w\+\* ]+\]', 'aaaaa', line)
      line = re.sub(r',', ';', line)
      line = re.sub(r'([{\s;]+)struct\s+(\w+)\s+\*?(\w+)\s*;', '\\1["\\3", \\2];', line)
      line = re.sub(r'([{\s;]+)\w+\s+\w+\s+\*?(\w+)\s*;', '\\1["\\2", null];', line)
      line = re.sub(r'([{\s;]+)\w+\s+\*?(\w+)\s*;', '\\1["\\2", null];', line)
      line = re.sub(r'([{\s;]+)\*?(\w+)\s*;', '\\1["\\2", null];', line)
      line = re.sub(r';', ',', line)
      line = re.sub(r'aaaaaaaaaa",\s*null', '", Array(40).fill(Array(40).fill(0))', line)
      line = re.sub(r'aaaaa",\s*null', '", Array(40).fill(0)', line)
      line = re.sub(r'aaaaa",\s*(\w+)', '", Array(40).fill(\\1)', line)
      line = re.sub(r',\]\);', ']);', line);
      line = re.sub(r'struct\s+(\w+)\s*\{([^}]*)\}', 'var \\1 = new Map([\\2])', line)
      line = re.sub(r'', '', line);
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  # add struct value to Map
  # struct_data = [...];
  # aaa.forEach(function(v,k,m){aaa.set(k, struct_data[struct_data_num]); struct_data_num++;});
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'(struct(\s+\w+)+\s*\=\s*\{[^\n;]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  file_put_contents(NEW_FILE, lines, 'w')

  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'struct\s+\w+\s+\w+\s*\=\s*\{[^\n;]*',  line):
      line = re.sub(r'\{', '[', line)
      line = re.sub(r'\}', ']', line)
      line = re.sub(r'struct\s+(\w+)\s+(\w+)\s*\=\s*([^\n]*)', "var struct_data_num = 0;\nvar struct_data = \\3;\nvar \\2 = \\1;\n\\1.forEach(function(v,k,m){ \\2[k] = (struct_data[struct_data_num] !== undefined) ? struct_data[struct_data_num] : v; struct_data_num++;});", line)
    file_put_contents(TMP_FILE, line, 'a')

  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # const var array
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'((\w+\s+)+const\s+\w+\s+\*?\w+\[[\w\+\*]*\]\s*\=\s*[^\;]*)\n+', "\\1", lines)
    lines2 = re.sub(r'((\w+\s+)+const\s+\w+\s+\*?\w+\[[\w\+\*]*\]\[[\w\+\*]*\]\s*\=\s*[^\;]*)\n+', "\\1", lines2)
    if lines == lines2:
      break
    else:
      lines = lines2

  # const matrix[][]
  lines = re.sub(r'(\w+\s+)+const\s+\w+\s+\*?(\w+)\[[\w\+\*]*\]\[[\w\+\*]*\]\s*\=\s*([^{]*)\{', "\nconst \\2[][]=\\3[", lines)

  while True:
    lines2 = re.sub(r'\nconst\s(\w+)\[\]\[\]\=([^{\n]*)\{([^;]*)', "\nconst \\1[][]=\\2[\\3", lines)
    lines2 = re.sub(r'\nconst\s(\w+)\[\]\[\]\=([^}\n]*)\}([^;]*)', "\nconst \\1[][]=\\2]\\3", lines2)

    if lines == lines2:
      break
    else:
      lines = lines2

  lines = re.sub(r'\nconst\s(\w+)\[\]\[\]\=', "\nconst \\1=", lines)


  # const array[]
  lines = re.sub(r'(\w+\s+)+const\s+\w+\s+\*?(\w+)\[[\w\+\*]*\]\s*\=\s*\{([^\}]+)\}', "const \\2 = [\\3]", lines)
  lines = re.sub(r'(\w+\s+)+const\s+\w+\s+\*?(\w+)\[[\w\+\*]*\]\s*\=\s*(\w+)', "const \\2 = \\3", lines)
  lines = re.sub(r'(\w+\s+)+\*?(?!const)(\w+)\[[\w\+\*]*\]\s*\=\s*\{([^\}]*)\}', 'var \\2 = [\\3]', lines)
  file_put_contents(NEW_FILE, lines, 'w')


  # function, variable definition out of function
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'((\*?\w+\s+)+\*?\w+\s*\([^\)]*)\n+', "\\1", lines)
    lines2 = re.sub(r'((\*?\w+\s+)+\*?\w+\s*\([^{]*)\n+({)', "\\1\\3", lines2)
    if lines == lines2:
      break
    else:
      lines = lines2
  file_put_contents(NEW_FILE, lines, 'w')

  is_function = False
  bracket_count = 0 # count{}
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if is_function == False:
      # start function
      if re.search(r'^(\*?\w+\s+)+\*?\w+\s*\([^\)]*\)', line):

        is_function = True
        bracket_count = 1
        line = re.sub(r'(\*?\w+\s+)+\*?(\w+)\s*\(', "function \\2(", line)
        line = re.sub(r'\s*(\*?\w+\s+)+\*?(\w+)\s*([\,\)])', "\\2\\3 ", line)
        line = re.sub(r'void', "", line)

      #exception
      elif re.search(r'new\s+\w+', line):
        pass

      #variable definition out of function
      elif re.search(r'(\w+\s+)+\*?\w+(\[[\w\+\*]*\])*', line):
        line = re.sub(r'(\w+\s+)+\*?(\w+)(\[[\w\+\*]*\])*', "var \\2", line)

    # is function
    else:
      if re.search(r'\{[^\'\"]', line):
        bracket_count += 1
      if re.search(r'\}[^\'\"]', line):
        bracket_count -= 1

      # end function
      if bracket_count == 0:
        is_function = False

        
      # & change in function
      if re.search(r'\w+\([^&]+&[^&]', line):
        while True:
          addresses = re.search(r'[^&]&([\w\.]+|\([\w\.]+\))', line)
          if addresses:
            address = addresses.groups()[0]
            line2 = address + "=" + address + "[" + address + "];\n" + line.replace('&'+address, address) + "\n" + address + "=" + address + "[0];\n"
          #while True:
          if line == line2: break
          else: line = line2

      # example: *x =
      #if re.search(r'\*[\w\.]+\s*\=', line):
      #  line = re.sub(r'\*([\w\.]+)\s*\=', '\\1[0] =', line)

      # variable definition
      if re.search(r'(\w+\s+)+\*?\w+', line):
        if re.search(r'(else|return|new|case|goto)', line):
          pass

        else:
          line = re.sub(r'(\w+\s+)+(\w+)', 'var \\2', line)
          line = re.sub(r',\s*\*(\w+)\s*', '; var \\1 = 0, \\1_array;', line)
          line = re.sub(r'\w+\s*\*(\w+)\s*', '\\1 = 0, \\1_array;', line)
          line = re.sub(r'^([^=]*)\*(\w+)', '\\1', line)
          while True:
            line2 = re.sub(r'^([^=]*)\[([\w\s\+\-\*]+)\]', '\\1 = new Array(\\2+24).fill(0)', line)#to ensure much
            if line == line2: break
            else: line = line2
              
        # variable with *
        if re.search(r'[^\w\)]\s*\*\w+', line):
          print line
          line = re.sub(r'([^\w\)\]]\s*)\*(\w+)', '\\1\\2', line)

      else:
        # example: *(x)
        if re.search(r'\*\(\s*[\w\.]+\s*\)', line):
          line = re.sub(r'\*\(\s*([\[a-zA-Z\.][\w\.]*)\s*\)', '\\1_array[\\1]', line)

        # example: *(x + i)
        elif re.search(r'\*\(\s*[\[a-zA-Z\.][\w\.]*\s*[\+\-]\s*[\w\.\+\-\s]+\s*\)', line):
          line = re.sub(r'\*\(\s*([\[a-zA-Z\.][\w\.]*)\s*([\+\-]\s*[\w\.\+\-\s]+)\s*\)', '\\1_array[\\1\\2]', line)

        
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  


  # delete default switch
  lines = file_get_contents(NEW_FILE)
  if re.search(r'sweph\.c$', BASE_FILE):

    lines = re.sub(r'return_err:', '', lines)
    lines = re.sub(r'goto\s+return_err;', 'return ERR;', lines)
    lines = re.sub(r'return_error:', '', lines)
    lines = re.sub(r'goto\s+return_error;', 'return ERR;', lines)
    lines = re.sub(r'return_error_gns:', '', lines)
    lines = re.sub(r'goto\s+return_error_gns;', 'return ERR;', lines)
    lines = re.sub(r'file_damage:', '', lines)
    lines = re.sub(r'goto\s+file_damage;', 'return ERR;', lines)
    lines = re.sub(r'goto end_swe_calc;', '', lines)#draft
    lines = re.sub(r'end_swe_calc:', '', lines)#draft
    lines = re.sub(r'goto three_positions;', '', lines)#draft
    lines = re.sub(r'three_positions:', '', lines)#draft
    lines = re.sub(r'do_fict_plan:', 'while(1){', lines)
    lines = re.sub(r'goto do_fict_plan;([^}]+}[^}]+}[^}]+})', '\\1\nbreak;\n}', lines)
    lines = re.sub(r'do_asteroid:', 'while(1){', lines)
    lines = re.sub(r'goto do_asteroid;([^}]+}[^}]+})', '\\1\nbreak;\n}', lines)
    lines = re.sub(r'again:', 'while(1){', lines)
    lines = re.sub(r'goto again;([^g]|g[^o])+goto again;([^}]+}[^}]+}[^}]+})', '\\1\n\\2\nbreak;\n}', lines)
    lines = re.sub(r'goto again;', 'continue;', lines)

    lines = re.sub(r'moshier_moon:', '', lines)
    lines = re.sub(r'moshier_planet:', '', lines)
    lines = re.sub(r'(?<=var)([^;])*;.*(?=found:)', '\\1;\nwhile(1){\\2\n}\n', lines, re.S)

    lines = re.sub(r'goto found;', '', lines)#draft
    lines = re.sub(r'found:', '', lines)#draft

  if re.search(r'swephlib\.c$', BASE_FILE):
    lines = re.sub(r'(function\sbessel.*)(([^d]|d[^o]|do[^n]|don[^e]|done[^:])+)done:', '\\1\nwhile(1){\n\\2\nbreak;\n}\n', lines)
    lines = re.sub(r'(function\sdeltat_aa.*)(([^d]|d[^o]|do[^n]|don[^e]|done[^:])+)done:', '\\1\nwhile(1){\n\\2\nbreak;\n}\n', lines)
    lines = re.sub(r'goto done;', 'break;', lines)


  file_put_contents(NEW_FILE, lines, 'w')
  #sys.exit()

  is_function = False
  switch_status = 0 #0:not, 1:current switch , 2:current case, 3:current default, 4:finish
  bracket_count = 0 # count{}
  bracket_count2 = 0 # count{}
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if is_function == False:
      # start function
      if re.search(r'function\s\w+', line):
        is_function = True
        bracket_count = 1

    # is function
    else:
      if re.search(r'\{[^\'\"]', line):
        bracket_count += 1
      if re.search(r'\}[^\'\"]', line):
        bracket_count -= 1

      # end function
      if bracket_count == 0:
        is_function = False

      else:
        if re.search(r'sweph\.c$', BASE_FILE):
          if switch_status == 0:
            if re.search(r'switch\((epheflag|pedp->iephe)\)', line):
              switch_status = 1
              bracket_count2 = 0
              continue
          else:
            if re.search(r'\{[^\'\"]', line):
              bracket_count2 += 1
            if re.search(r'\}[^\'\"]', line):
              bracket_count2 -= 1

            if switch_status == 1:
              if re.search(r'case\sSEFLG_MOSEPH:', line):
                switch_status = 2
              elif re.search(r'default:', line):
                switch_status = 3
              continue
            elif switch_status == 2:
              if re.search(r'default:', line):
                switch_status = 3
                continue
              if re.search(r'break;', line) and bracket_count2 == 0:
                continue
            elif switch_status == 3:
              if re.search(r'break;', line) and bracket_count2 == 0:
                switch_status = 4
                continue
            elif switch_status == 4:
              if re.search(r'}', line):
                switch_status = 0
                continue

    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)



  #serr
  multi_line_if = False
  bracket_count = 0 # count{}
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    line = re.sub(r',\s*serr', "", line)

    if multi_line_if:
      if re.search(r'\{', line):
        bracket_count += 1
      if re.search(r'\}', line):
        bracket_count -= 1
      if bracket_count == 0:
        multi_line_if = False
      continue

    if re.search(r'if\s*\(', line):
      if re.search(r'serr', line):
        if re.search(r'{', line):
          multi_line_if = True
          bracket_count += 1
        continue
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  #if(0)
  multi_line_if = False
  bracket_count = 0 # count{}
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if multi_line_if:
      if re.search(r'\{', line):
        bracket_count += 1
      if re.search(r'\}', line):
        bracket_count -= 1
      if bracket_count == 0:
        multi_line_if = False
      continue

    if re.search(r'if\s*\(0', line):
      if re.search(r'{', line):
        multi_line_if = True
        bracket_count += 1
      continue
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  # chenge math, type
  lines = file_get_contents(NEW_FILE)
  lines = re.sub(r'sizeof\(int\)', "8", lines)
  lines = re.sub(r'sizeof\(double\)', "32", lines)
  lines = re.sub(r'atoi\(([^)]+)\)', "parseInt(\\1)", lines)
  lines = re.sub(r'ato[fl]\(([^)]+)\)', "parseFloat(\\1)", lines)
  lines = re.sub(r'\([^\(\)]*\w+\s+\*\)', "", lines)
  #lines = re.sub(r'\(int\)\s?\(', "parseInt(", lines)
  #lines = re.sub(r'\(int\)\s?(\w+)', "parseInt(\\1)", lines)
  #lines = re.sub(r'\(double\)\s?\(', "parseFloat(", lines)
  #lines = re.sub(r'\(double\)\s?(\w+)', "parseFloat(\\1)", lines)
  lines = re.sub(r'\([^\(\)]*\w+\s+\*\)', "", lines)
  lines = re.sub(r'\(int\)', "", lines)
  lines = re.sub(r'\(int32\)', "", lines)
  lines = re.sub(r'\(double\)', "", lines)
  lines = re.sub(r'\(char\)', "", lines)
  lines = re.sub(r'\(void\)', "", lines)
  lines = re.sub(r'\(size_t\)', "", lines)
  
  lines = re.sub(r'([^\w])(sin\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(cos\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(tan\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(asin\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(acos\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(atan\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(atan2\()', "\\1Math.\\2", lines)
  lines = re.sub(r'([^\w])(fabs\()', "\\1Math.\\2", lines)
  lines = re.sub(r'(0x\d+)L', "\\1", lines)
  lines = re.sub(r'([^a-zA-Z]\d+)L', "\\1", lines)
  lines = re.sub(r'(\w+)->(\w+)', '\\1["\\2"]', lines)
  #delete pointer
  lines = re.sub(r'(\n\s*)\*(\w)', "\\1\\2", lines)
  lines = re.sub(r'&(\w+)', "\\1", lines)
  lines = re.sub(r'&\(([^\(\)]+)\)', "(\\1)", lines)
  lines = re.sub(r'=\s*(memset|malloc).+;', "=0;", lines)
  lines = re.sub(r'(memset|malloc).+;', "", lines)
  lines = re.sub(r'strcpy\(([^,]+),(.+)(\)\s*\;)', "\\1 = \\2;", lines)
  lines = re.sub(r'strncpy\(([^,]+),(.+),(.+)\)', "\\1 = \\2", lines)
  lines = re.sub(r'free\(.*;\s*\n', "", lines)
  lines = re.sub(r'sizeof\s*\((\w*\s*)?(\w+)\)', "\\2.length", lines)
  lines = re.sub(r'.*(MALLOC|CALLOC|FREE).*\n', "\n", lines)

  file_put_contents(NEW_FILE, lines, 'w')
  

  # remove new lines
  lines = file_get_contents(NEW_FILE)
  lines = re.sub(r'\n+', "\n", lines)
  file_put_contents(NEW_FILE, lines, 'w')

def file_get_contents(path):
  file = open(path, 'r')
  text = file.read()
  file.close()
  return text

def file_put_contents(path, data, flag):
  file = open(path, flag)
  file.write(data)
  file.close()

