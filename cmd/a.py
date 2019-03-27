#coding:utf-8

import re
import os
import m

base_files_dir = "../swisseph/"
'''
base_files = [
  "../cmd/def.js",
  "swejpl.h",
  "swephexp.h",
  "sweph.h",
  "sweph.c",
  "swenut2000a.h",
  "swedate.h",
  "swedate.c",
  "swephlib.h",
  "swephlib.c",
  "swemmoon.c",
  "swemptab.h",
  "swemplan.c",
  "swecl.c",
  "swedll.h",
  "swedllst.c",
  "swehel.c",
  "swehouse.h",
  "swehouse.c",
  "swepcalc.h",
  "swepcalc.c",
]
'''
base_files = [
  "../cmd/def.js",
  "swejpl.h",
  "swephexp.h",
  "sweph.h",
  "sweph.c",
]
new_file_dir = "../js2/"
new_file_name = "swe"

for base_file in base_files:
  m.main(base_files_dir + base_file, new_file_dir + base_file + ".js")

if os.path.isfile(new_file_dir + new_file_name + ".js"):
  os.remove(new_file_dir + new_file_name + ".js")
new_file = open(new_file_dir + new_file_name + ".js", 'a')
for base_file in base_files:
  tmp_file = open(new_file_dir + base_file + ".js", 'r')
  tmp_file_text = tmp_file.read()
  tmp_file.close()
  new_file.write(tmp_file_text)
new_file.close()
