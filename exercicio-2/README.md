## Exercício 2 :)

<code> Médio </code> <code> Desafio de Matriz </code>

<br>

Faça com que a função $${\color{RedOrange}ArrayChallenge(}$$ $${\color{Periwinkle}strArr}$$ $${\color{RedOrange})}$$ leia o parâmetro $${\color{Periwinkle}strArr}$$ que está sendo passado, o que representará um dia inteiro e será preenchido com eventos que vão do horário X ao horário Y no dia. O formato de cada evento será <b>hh:mmAM/PM-hh:mmAM/PM</b>. Por exemplo, $${\color{Periwinkle}strArr}$$ pode ser ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]. Seu programa terá que gerar a maior quantidade de tempo livre disponível entre o início de seu primeiro evento e o final de seu último evento no formato: <b>hh:mm</b>. O evento inicial deve ser evento mais cedo do dia e o evento mais recente deve ser o evento mais recente do dia. A saída para a entrada anterior seria, portanto, <b>01:30</b> (com o primeiro evento do dia começando às <b>09h10</b> e o último evento terminando as <b>14h45</b>). A entrada conterá pelo menos 3 eventos e os eventos podem estar fora de ordem.

<br>

> Depois que sua função estiver funcionando, pegue a string de saída final e combine-a com seu ChallengeToken, ambos na ordem inversa e separados por dois pontos.
>
> Seu token de desafio: <b>2esjpv4t85</b>

<br>

#### Exemplos

> <b>Entrada:</b> ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]
>
> <b>Saída:</b> 00:30
>
> <b>Saída final:</b> 03:00:58t4vpjse2

<br>

> <b>Entrada:</b> ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]
>
> <b>Saída:</b> 00:04
>
> <b>Saída final:</b> 40:00:58t4vpjse2