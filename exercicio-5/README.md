## Exercício 5

<code> Médio </code> <code> Desafio de String </code>

<br>

Faça com que a função $${\color{RedOrange}StringChallenge(}$$ $${\color{Periwinkle}str}$$ $${\color{RedOrange})}$$ leia o parâmetro $${\color{Periwinkle}str}$$ sendo passado, que será uma string de elementos HTML DOM e texto simples. Os elementos que serão usados: b, i, em, div, p. Por exemplo: se $${\color{Periwinkle}str}$$ for "```<div><b><p>hello word<p></b></div>```" então esta string de elementos DOM está aninhada corretamente, então seu programa feve retornar a string <b>"true"</b>.

Se um string não estiver aninhada corretamente, retorne o primeiro elemento encontrado onde, se alterado para um elemento diferente, resultaria em uma string formatada corretamente. Se a string não estiver formatada corretamente, será apenas um elemento que precisa ser alterado. Por exemplo: se $${\color{Periwinkle}str}$$ é "```<div><i>hello</i>word</b>```" então seu programa deve retornar a string "div" porque se o primeiro elemento ```<div>``` fosse alterado para um ```<b>```, a string seria formatada corretamente.

<br>

> Depois que sua função estiver funcionando, pegue a string de saída final e concatene-a com seu ChallengeToken e, em seguida, substitua cada quarto caractere por um sublinhado.
>
> Seu token de desafio: <b>w8kciqfyd1b</b>

<br>

#### Exemplos

> <b>Entrada:</b> ```<div><div><b></b></div></p>```
>
> <b>Saída:</b> div
>
> <b>Saída final:</b> div_8kc_qfy_1b

<br>

> <b>Entrada:</b> ```<div>abc</div><p><em><i>test test test</b></em></p>```
>
> <b>Saída:</b> i
>
> <b>Saída final:</b> iw8_ciq_yd1_