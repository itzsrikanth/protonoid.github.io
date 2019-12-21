---
title: 
---
# One-liners

## Perl

- `-e`: allows you to specify the Perl code to be executed right on the command line
- `-p`: code gets executed on every line, and that the line gets printed out after that
- `-i`: opens the file, executes the substitution for each line, prints the output to a temporary file, and then replaces the original file


### 

## awk
- Combine multiline text into single line
*source: [Perl Regex One-Liner Cookbook](https://www.rexegg.com/regex-perl-one-liners.html)*
```bash
<multiline_output_command> | awk '{printf("%s", $0)}'
```

## References
- [Sed One-liners](http://www.pement.org/sed/sed1line.txt)
- [Introduction to Perl one-liners](https://catonmat.net/introduction-to-perl-one-liners)