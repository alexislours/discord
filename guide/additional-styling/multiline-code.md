---
layout: default
title: Multiline Code Block
nav_order: 11
parent: Additional Styling
permalink: multiline-code/
---

# Multiline Code Block

Encapsulating your text with three backtick (```` ``` ````) will create an multiline code block. Multi line code block benefit from syntax highlighting if you specify a language after the first 3 backticks and preserve indenting of code.

Example:

\`\`\`This is a multi line code block\`\`\`

\`\`\`html  
\<p>This will use HTML synxtax highlighting\</p>  
\`\`\`

\`\`\`py  
x = 1  
if x == 1:  
&nbsp;&nbsp;&nbsp;&nbsp;# indented four spaces  
&nbsp;&nbsp;&nbsp;&nbsp;print("x is 1.")  
\`\`\`

Result:

```
This is a multi line code block
```

```html
<p>This will use HTML synxtax highlighting</p>
```

```py
x = 1
if x == 1:
    # indented four spaces
    print("x is 1.")
```

{: .note}
Discord uses [Highlight.js](https://highlightjs.org/) for syntax highlighting. This can be used to create colored text as explained [here](/discord/colors).

## Supported languages

Discord supports a lot of programming languages, the list of said languages and their aliases (what you have to write after the 3 backticks) can be found in this table:

| Language                | Alias                  |
| ----------------------- | ---------------------- |
| 1C                      | 1c                     |
| ABNF                    | abnf                   |
| Access logs             | accesslog              |
| Ada                     | ada                    |
| Arduino                 | arduino                |
| ARM assembler           | armasm, arm            |
| AVR assembler           | avrasm                 |
| ActionScript            | actionscript, as       |
| AngelScript             | angelscript, asc       |
| Apache                  | apache, apacheconf     |
| AppleScript             | applescript, osascript |
| Arcade                  | arcade                 |
| AsciiDoc                | asciidoc, adoc         |
| AspectJ                 | aspectj                |
| AutoHotkey              | autohotkey, ahk        |
| AutoIt                  | autoit                 |
| Awk                     | awk                    |
| Bash                    | bash, sh, zsh          |
| Basic                   | basic                  |
| BNF                     | bnf                    |
| Brainfuck               | brainfuck, bf          |
| C#                      | csharp, cs             |
| C                       | c, h                   |
| C++                     | cpp, hpp, cc, hh, c++, h++, cxx, hxx |
| C/AL                    | cal                    |
| Cache Object Script     | cos, cls               |
| CMake                   | cmake, cmake.in        |
| Coq                     | coq                    |
| CSP                     | csp                    |
| CSS                     | css                    |
| Cap’n Proto             | capnproto, capnp       |
| Clojure                 | clojure, clj           |
| CoffeeScript            | coffeescript, coffee, cson, iced |
| Crmsh                   | crmsh, crm, pcmk       |
| Crystal                 | crystal, cr            |
| D                       | d                      |
| DNS Zone file           | dns, zone, bind        |
| DOS                     | dos, bat, cmd          |
| Dart                    | dart                   |
| Delphi                  | delphi, dpr, dfm, pas, pascal, freepascal, lazarus, lpr, lfm |
| Diff                    | diff, patch            |
| Django                  | django, jinja          |
| Dockerfile              | dockerfile, docker     |
| dsconfig                | dsconfig               |
| DTS (Device Tree)       | dts                    |
| Dust                    | dust, dst              |
| EBNF                    | ebnf                   |
| Elixir                  | elixir                 |
| Elm                     | elm                    |
| Erlang                  | erlang, erl            |
| Excel                   | excel, xls, xlsx       |
| F#                      | fsharp, fs             |
| FIX                     | fix                    |
| Fortran                 | fortran, f90, f95      |
| G-Code                  | gcode, nc              |
| Gams                    | gams, gms              |
| GAUSS                   | gauss, gss             |
| Gherkin                 | gherkin                |
| Go                      | go, golang             |
| Gradle                  | gradle                 |
| Groovy                  | groovy                 |
| HTML, XML               | xml, html, xhtml, rss, atom, xjb, xsd, xsl, plist, svg |
| HTTP                    | http, https            |
| Haml                    | haml                   |
| Handlebars              | handlebars, hbs, html.hbs, html.handlebars        |
| Haskell                 | haskell, hs            |
| Haxe                    | haxe, hx               |
| Hy                      | hy, hylang             |
| Ini, TOML               | ini, toml              |
| Inform7                 | inform7, i7            |
| IRPF90                  | irpf90                 |
| JSON                    | json                   |
| Java                    | java, jsp              |
| JavaScript              | javascript, js, jsx    |
| Julia                   | julia, julia-repl      |
| Kotlin                  | kotlin, kt             |
| LaTeX                   | tex                    |
| Leaf                    | leaf                   |
| Lasso                   | lasso, lassoscript     |
| Less                    | less                   |
| LDIF                    | ldif                   |
| Lisp                    | lisp                   |
| LiveCode Server         | livecodeserver         |
| LiveScript              | livescript, ls         |
| Lua                     | lua                    |
| Makefile                | makefile, mk, mak,     |
| Markdown                | markdown, md, mkdown, mkd |
| Mathematica             | mathematica, mma, wl   |
| Matlab                  | matlab                 |
| Maxima                  | maxima                 |
| Maya Embedded Language  | mel                    |
| Mercury                 | mercury                |
| Mizar                   | mizar                  |
| Mojolicious             | mojolicious            |
| Monkey                  | monkey                 |
| Moonscript              | moonscript, moon       |
| N1QL                    | n1ql                   |
| NSIS                    | nsis                   |
| Nginx                   | nginx, nginxconf       |
| Nim                     | nim                    |
| Nix                     | nix                    |
| OCaml                   | ocaml, ml              |
| Objective C             | objectivec, mm, objc, obj-c |
| OpenGL Shading Language | glsl                   |
| OpenSCAD                | openscad, scad         |
| Oracle Rules Language   | ruleslanguage          |
| Oxygene                 | oxygene                |
| PF                      | pf, pf.conf            |
| PHP                     | php, php3, php4, php5, php6, php7 |
| Parser3                 | parser3                |
| Perl                    | perl, pl, pm           |
| Plaintext               | plaintext, txt, text   |
| Pony                    | pony                   |
| PostgreSQL & PL/pgSQL   | pgsql, postgres, postgresql |
| PowerShell              | powershell, ps, ps1    |
| Processing              | processing             |
| Prolog                  | prolog                 |
| Properties              | properties             |
| Protocol Buffers        | protobuf               |
| Puppet                  | puppet, pp             |
| Python                  | python, py, gyp        |
| Python profiler results | profile                |
| Python REPL             | python-repl, pycon     |
| Q                       | k, kdb                 |
| QML                     | qml                    |
| R                       | r                      |
| ReasonML                | reasonml, re           |
| RenderMan RIB           | rib                    |
| RenderMan RSL           | rsl                    |
| Roboconf                | graph, instances       |
| Ruby                    | ruby, rb, gemspec, podspec, thor, irb |
| Rust                    | rust, rs               |
| SAS                     | sas                    |
| SCSS                    | scss                   |
| SQL                     | sql                    |
| STEP Part 21            | p21, step, stp         |
| Scala                   | scala                  |
| Scheme                  | scheme                 |
| Scilab                  | scilab, sci            |
| Shell                   | shell, console         |
| Smali                   | smali                  |
| Smalltalk               | smalltalk, st          |
| SML                     | sml                    |
| Stan                    | stan, stanfuncs        |
| Stata                   | stata                  |
| Stylus                  | stylus, styl           |
| SubUnit                 | subunit                |
| Swift                   | swift                  |
| Tcl                     | tcl, tk                |
| Test Anything Protocol  | tap                    |
| Thrift                  | thrift                 |
| TP                      | tp                     |
| Twig                    | twig, craftcms         |
| TypeScript              | typescript, ts         |
| VB.Net                  | vbnet, vb              |
| VBScript                | vbscript, vbs          |
| VHDL                    | vhdl                   |
| Vala                    | vala                   |
| Verilog                 | verilog, v             |
| Vim Script              | vim                    |
| X++                     | axapta                 |
| x86 Assembly            | x86asm                 |
| XL                      | xl, tao                |
| XQuery                  | xquery, xpath, xq      |
| YAML                    | yml, yaml              |
| Zephir                  | zephir, zep            |