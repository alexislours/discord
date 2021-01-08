---
layout: default
title: Multiline Code Block
nav_order: 10
parent: Additional Styling
permalink: multiline-code/
---

# Multiline Code Block

Encapsulating your text with three backtick (`` ``` ``) will create an multiline code block. Multi line code block benefit from syntax highlighting if you specify a language after the first 3 backticks and preserve indenting of code.

Example:

\`\`\`This is a multi line code block\`\`\`

\`\`\`html  
\<p>This will use HTML synxtax highlighting\</p>  
\`\`\`

\`\`\`py  
x = 1  
if x == 1:  
    # indented four spaces  
    print("x is 1.")  
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