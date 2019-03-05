#coding:utf-8

import sys
import os
import shutil
import re
import linecache

def main(base_file, new_file):
  define_regex = r'#ifn?(def)?\s+('\
  '1'\
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
    if re.search(r'#if(def)?\s+', line):
      if re.search(define_regex, line):
        delete_flags.append(False)
      else:
        delete_flags.append(True)
      continue
    elif re.search(r'#ifndef\s+', line):
      if re.search(define_regex, line):
        delete_flags.append(True)
      else:
        delete_flags.append(False)
      continue

    if re.search(r'#else', line):
      delete_flags[-1] = not(delete_flags[-1])
      continue

    if re.search(r'#endif', line):
      delete_flags.pop()
      continue

    if re.search(r'#\s*include', line):
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
  lines = re.sub(r'\s*/\*([^/]|[^\*]/)*\*/', "", lines)
  lines = re.sub(r'\n(static\s+|extern\s+)?(\w+\s+)+\*?\w+\s*\([^\)]+\)\s*;', "", lines)
  lines = re.sub(r'(\n|\s)TLS\s', '\\1', lines)
  lines = re.sub(r'\t', " ", lines)
  lines = re.sub(r'(?<!\w)TRUE(?!\w)', "true", lines)
  lines = re.sub(r'(?<!\w)FALSE(?!\w)', "false", lines)
  lines = re.sub(r'(?<!\w)NULL(?!\w)', "null", lines)
  lines = re.sub(r'//[^\n]*', "", lines)
  file_put_contents(NEW_FILE, lines, 'w')

  # change #define to const or function
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    while(True):
      # delete #define
      define = re.search(r'#define\s+(\w+)\s*$', line)
      if define:
        line = False
        break

      # make const if "xxx" or (xxx) or number
      define = re.search(r'#define[\s]+(\w+)\s+(struct\s+)?("[^"]*"|\([^\)]*\)|[\w\-\.+]+)(.*)', line)
      if define:
        line = "\nconst " + define.group(1) + " = " + define.group(3) + ";" + define.group(4) + "\n"
      define = re.search(r'#define\s+(\w+)\s+\{([^\}]*)\}(.*)', line)
      if define:
        line = "\nconst " + define.group(1) + " = [" + define.group(2) + "];" + define.group(3) + "\n"

      # make function
      define = re.search(r'#define\s+(\w+\([^\)]*\))\s+(.*)', line)
      if define:
        line = "\nfunction " + define.group(1) + "{return " + define.group(2) + "}"
      break

    if not line == False: 
      file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


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
      line += "\nfor(var i=0;i<struct_data.length;i++){" + variable + "[i]={};struct_data_num=0;" + struct + ".forEach(function(v,k,m){" + variable + "[i][k] = struct_data[i][struct_data_num];struct_data_num++})};" 
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
      line = re.sub(r'\[[\w\+\* ]+\]', '', line)
      line = re.sub(r',', ';', line)
      line = re.sub(r'([{\s;]+)struct\s+\w+\s+\*?(\w+)\s*;', '\\1\\2;', line)
      line = re.sub(r'([{\s;]+)\w+\s+\*?(\w+)\s*;', '\\1\\2;', line)
      line = re.sub(r'(\w+);', '["\\1",null],', line)
      line = re.sub(r'struct\s+(\w+)\s*\{([^}]*)\}', 'var \\1 = new Map([\\2])', line)
      line = re.sub(r',\]\);', ']);', line);
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
      line = re.sub(r'struct\s+(\w+)\s+(\w+)\s*\=\s*([^\n]*)', "var struct_data_num = 0;\nvar struct_data = \\3;\nvar \\2 = {};\n\\1.forEach(function(v,k,m){\\2[k] = struct_data[struct_data_num]; struct_data_num++;});", line)
    file_put_contents(TMP_FILE, line, 'a')

  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # const var array
  lines = file_get_contents(NEW_FILE)
  while True:
    lines2 = re.sub(r'((\w+\s+)+const\s+\w+\s+\*?\w+\[[\w\+\*]*\]\s*\=\s*\{[^\;]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2

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
        line = re.sub(r'(\*?\w+\s+)+\*?(\w+)\(', "function \\2(", line)
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
      if re.search(r'\{', line):
        bracket_count += 1
      if re.search(r'\}', line):
        bracket_count -= 1

      # end function
      if bracket_count == 0:
        is_function = False

      # example: *(x + i)
      if re.search(r'\*\(\s*\w+\s*\+\s*\w+\s*\)', line):
        line = re.sub(r'\*\(\s*(\w+)\s*\+\s*(\w+)\s*\)', '\\1[\\2]', line)

      # variable definition
      elif re.search(r'(\w+\s+)+\*?\w+', line):
        if re.search(r'(else|return|new|case)', line):
          pass

        else:
          line = re.sub(r'(\w+\s+)+\*?(\w+)', 'var \\2', line)
          line = re.sub(r'\*(\w+)', '\\1', line)
          line = re.sub(r'\[(\w+)\]', ' = new Array(\\1).fill(0)', line)

    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # goto
  is_function = False
  is_goto = False
  bracket_count = 0 # count{}
  function_start_line = ""
  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if is_function == False:
      # start function
      if re.search(r'^\*?function\s+\w+\s*\([^\)]*\)', line):
        is_function = True
        bracket_count = 1
        function_start_line = line

    # is function
    else:
      if re.search(r'\{', line):
        bracket_count += 1
      if re.search(r'\}', line):
        bracket_count -= 1

      # end function
      if bracket_count == 0:
        is_function = False
        is_goto = False
        function_start_line = ""
        if is_goto:
          line = "default:\nbreak target;\n}" + line

      if is_goto == False and (re.search(r'goto\s+\w+', line) or re.search(r'\w+:', line)):
        is_goto = True
        tmp_file_lines = file_get_contents(TMP_FILE)
        tmp_file_lines = tmp_file_lines.replace(function_start_line, function_start_line + "\nvar target;\ntarget: while(true) switch (target) {\ncase undefined:\n")
        file_put_contents(TMP_FILE, tmp_file_lines, 'w')

      if re.search(r'goto\s+\w+', line):
        line = re.sub(r'goto\s+(\w+)', 'target = "\\1";\ncontinue target', line)
          
      if re.search(r'(\w+):', line):
        line = re.sub(r'\n\s*(\w+)\s*:', '\ncase "\\1":', line)
          
    file_put_contents(TMP_FILE, line, 'a')
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # chenge math, type
  lines = file_get_contents(NEW_FILE)
  lines = re.sub(r'\(int\)\s?\(', "parseInt(", lines)
  lines = re.sub(r'\(int\)\s?(\w+)', "parseInt(\\1)", lines)
  lines = re.sub(r'\(double\)\s?\(', "parseFloat(", lines)
  lines = re.sub(r'\(double\)\s?(\w+)', "parseFloat(\\1)", lines)
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
  lines = re.sub(r'&(\w)', "\\1", lines)
  lines = re.sub(r'(memset|malloc).+;', "", lines)

  lines = re.sub(r'sprintf', "console.error", lines)
  lines = re.sub(r'strcpy\(([^,]+),(.+)(\)\s*\;)', "\\1 = \\2;", lines)
  lines = re.sub(r'strncpy\(([^,]+),(.+),(.+)', "\\1 = \\2;", lines)
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

