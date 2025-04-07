## Most Free Time

<code> Medium </code> <code> Array Challenge </code>

<br>

Have the function $${\color{RedOrange}MostFreeTime(}$$ $${\color{Periwinkle}strArr}$$ $${\color{RedOrange})}$$ read the $${\color{Periwinkle}strArr}$$ parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be __hh:mmAM/PM-hh:mmAM/PM__.

For example, $${\color{Periwinkle}strArr}$$ may be ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: __hh:mm__.

The start event should be the earliest event in the day and the latest event should be the lastest event in the day. The output for the previous input would therefore bre __01:30__ (with the earliest event in the day starting at __09:10AM__ and the latest event ending at 02:45PM). The input will contain as least 3 events and the events may be out of order.

<br>

#### Examples

> <b>Input:</b> ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]
>
> <b>Output:</b> 00:30

<br>

> <b>Input:</b> ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]
>
> <b>Output:</b> 00:04