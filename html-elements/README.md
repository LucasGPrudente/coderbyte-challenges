## HTML Elements

<code> Medium </code> <code> String Challenge </code>

<br>

Have the function $${\color{RedOrange}HTMLElements(}$$ $${\color{Periwinkle}str}$$ $${\color{RedOrange})}$$ read the $${\color{Periwinkle}str}$$ parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p.

For example: if $${\color{Periwinkle}str}$$ is "```<div><b><p>hello world</p></b></div>```" then this string of DOM elements is nested correctly so your program should return the string __"true"__.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, the it will only be one element that needs to be changed.

For Example: if $${\color{Periwinkle}str}$$ is "```<div><i>hello</i>world</b>```" then your program should return the string __div__ because if the first div element were changed into a b, the string would be properly formatted.

<br>

#### Examples

> <b>Input:</b> ```<div><div><b></b></div></p>```
>
> <b>Output:</b> div

<br>

> <b>Input:</b> ```<div>abc</div><p><em><i>test test test</b></em></p>```
>
> <b>Output:</b> i