---
title: CPP Introduction
---
# C++ Basics

1. Preprocessing
2. Compiling
3. Assembling compiled files
4. Linking object code file to create executable

## Preprocessing
- header files declarations are replace with the whole file, creating an expanded source code
- this is compiled to assembly lang code
- assembler converts it into object code
- object code file is linked together with object coe files for any library functions to produce executables

### Include guards
When we include a header file, which gets included as a part of some other header file, multiple definitions occur. This can be overcome by:

```cpp
#ifndef <unique_name>
  #define <unique_name>
#endif
```
e.g:- While including `logger.hpp`, we can define the `unique_name` as `LOGGER_HPP`.

## Compiling
- Syntax check

### Compiler
#### Options
- `-c`: compiles the source code into object code file instead of generating the executable.
```sh
g++ -c -o myfile.obj myfile.cpp
```
- `-I`: when we include custom header files, we need to specify its `include` directory
```sh
g++ -c -I include/ -o myfile.obj myfile.cpp
```

## Linking
```sh
g++ main.obj mylib.obj -o main
```
To compile source files without producing intermediate state:
```sh
g++ -I include/ mylib.cpp main.cpp -o main
```

## Datatypes
- int (4 bytes)
- short int ()
- long int ()
- long long int ()

## Debugging
### lldb
#### examples
##### console debug
- Evaluating variables and methods
  - p (int)strlen(str)
  (int) $1 = 4
  - p (char*)str
  (char *) $2 = "abc"
