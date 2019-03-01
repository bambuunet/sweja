#coding:utf-8

import sys
import os
import shutil
import re

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
  if len(sys.argv) > 2:
    NEW_FILE = sys.argv[2]

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
      tmp_file = open(TMP_FILE,'a')
      tmp_file.write(line)
      tmp_file.close()
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # remove prototype declaration, TLS, \r, \t, //comment
  # change TRUE, FALSE
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  new_file = open(NEW_FILE, 'w')
  lines = re.sub(r'\r\n', "\n", lines)
  lines = re.sub(r'\s*/\*([^/]|[^\*]/)*\*/', "", lines)
  lines = re.sub(r'\n(static\s+|extern\s+)?(\w+\s+)+\*?\w+\s*\([^\)]+\)\s*;', "", lines)
  lines = re.sub(r'(\n|\s)TLS\s', '\\1', lines)
  lines = re.sub(r'\t', " ", lines)
  lines = re.sub(r'(?<!\w)TRUE(?!\w)', "true", lines)
  lines = re.sub(r'(?<!\w)FALSE(?!\w)', "false", lines)
  lines = re.sub(r'(?<!\w)NULL(?!\w)', "null", lines)
  lines = re.sub(r'//[^\n]*', "", lines)
  new_file.write(lines)
  new_file.close()

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

    tmp_file = open(TMP_FILE,'a')
    if not line == False: 
      tmp_file.write(line)
    tmp_file.close()
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)

  # change struct to Map
  # change to 1 line
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  while True:
    lines2 = re.sub(r'(struct\s+\w+\s*{[^\n}]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  new_file = open(NEW_FILE, 'w')
  new_file.write(lines)
  new_file.close()

  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'struct\s+\w+\s*{', line):
      line = re.sub(r'\[[\w\+\* ]+\]', '', line)
      line = re.sub(r',', ';', line)
      line = re.sub(r'([{\s;]+)struct\s+\w+\s+\*?(\w+)\s*;', '\\1\\2;', line)
      line = re.sub(r'([{\s;]+)\w+\s+\*?(\w+)\s*;', '\\1\\2;', line)
      line = re.sub(r'({?)([\s;]+)(\w+);', '\\1["\\3",null],', line)
      line = re.sub(r'struct\s+(\w+)\s*\{([^}]*)\}', 'var \\1 = new Map([\\2])', line)
    tmp_file = open(TMP_FILE,'a')
    tmp_file.write(line)
    tmp_file.close()
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # add struct value to Map
  # struct_data = [...];
  # aaa.forEach(function(v,k,m){aaa.set(k, struct_data[struct_data_num]); struct_data_num++;});
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  while True:
    lines2 = re.sub(r'(struct(\s+\w+)+\s*\=\s*\{[^\n;]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2
  new_file = open(NEW_FILE, 'w')
  new_file.write(lines)
  new_file.close()

  new_file = open(NEW_FILE, 'r')
  for line in new_file:
    if re.search(r'struct\s+\w+\s+\w+\s*\=\s*\{[^\n;]*',  line):
      line = re.sub(r'\{', '[', line)
      line = re.sub(r'\}', ']', line)
      line = re.sub(r'struct\s+(\w+)\s+(\w+)\s*\=\s*([^\n;]*)', "var struct_data_num = 0;\nvar struct_data = \\3;\nvar \\2 = \\1.forEach(function(v,k,m){\\1.set(k, struct_data[struct_data_num]);", line)
    tmp_file = open(TMP_FILE,'a')
    tmp_file.write(line)
    tmp_file.close()
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # const var array
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  while True:
    lines2 = re.sub(r'((\w+\s+)+const\s+\w+\s+\*?\w+\[[\w\+\*]*\]\s*\=\s*\{[^\}]*)\n+', "\\1", lines)
    if lines == lines2:
      break
    else:
      lines = lines2

  lines = re.sub(r'(\w+\s+)+const\s+\w+\s+\*?(\w+)\[[\w\+\*]*\]\s*\=\s*\{([^\}]+)\}', "const \\2 = [\\3]", lines)
  lines = re.sub(r'(\w+\s+)+const\s+\w+\s+\*?(\w+)\[[\w\+\*]*\]\s*\=\s*(\w+)', "const \\2 = \\3", lines)
  lines = re.sub(r'(\w+\s+)+\*?(?!const)(\w+)\[[\w\+\*]*\]\s*\=\s*\{([^\}]*)\}', 'var \\2 = [\\3]', lines)
  new_file = open(NEW_FILE, 'w')
  new_file.write(lines)
  new_file.close()


  # function, variable definition out of function
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  while True:
    lines2 = re.sub(r'((\*?\w+\s+)+\*?\w+\s*\([^\)]*)\n+', "\\1", lines)
    lines2 = re.sub(r'((\*?\w+\s+)+\*?\w+\s*\([^{]*)\n+({)', "\\1\\3", lines2)
    if lines == lines2:
      break
    else:
      lines = lines2
  new_file = open(NEW_FILE, 'w')
  new_file.write(lines)
  new_file.close()

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

      #variable definition out of function
      elif re.search(r'(\w+\s+)+\*?\w+(\[[\w\+\*]*\])*', line):
        line = re.sub(r'(\w+\s+)+\*?(\w+)(\[[\w\+\*]*\])*', "var \\2", line)


    # is function
    else:
      if re.search(r'\{', line):
        bracket_count += 1
      if re.search(r'\}', line):
        bracket_count -= 1
      if re.search(r'[\*\&]\w+', line):
        line = re.sub(r'[\*\&](\w+)', '\\1', line)

      # end function
      if bracket_count == 0:
        is_function = False

      # variable definition
      elif re.search(r'(\w+\s+)+\*?\w+', line):
        if re.search(r'(else|return)', line):
          pass
        else:
          line = re.sub(r'(\w+\s+)+(\w+)', 'var \\2', line)
          line = re.sub(r'\[(\d+)\]', ' = new Array(\\1).fill(0)', line)

    tmp_file = open(TMP_FILE,'a')
    tmp_file.write(line)
    tmp_file.close()
  new_file.close()
  shutil.copyfile(TMP_FILE, NEW_FILE)
  os.remove(TMP_FILE)


  # chenge math, type
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  new_file = open(NEW_FILE, 'w')
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
  lines = re.sub(r'sprintf', "console.error", lines)
  new_file.write(lines)
  new_file.close()


  # remove new lines
  new_file = open(NEW_FILE, 'r')
  lines = new_file.read()
  new_file.close()
  new_file = open(NEW_FILE, 'w')
  lines = re.sub(r'\n+', "\n", lines)
  new_file.write(lines)
  new_file.close()


