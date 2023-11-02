# perpetual-continuity

## Description

This project will use JavaScript and will go onto node package manager as a utility.<br>
Time Zone Conversion; either accepts a string (EST, CST, etc.) hour difference (+/- 1-23) minute difference (+/- interval of 60)<br>
24hour-12hour or 12hour-24hour time conversions<br>
Time formatter (hh:mm:ss Meridian, H: m:s no Meridian) Capital H will be for 24 hour and lower case h will be for 12 hour.<br>
Time Math (could have two times inserted to find the difference, could have a time and then the difference and output the new time)<br>

## Criteria

GIVEN I am using a time manipulation library to help me format and calculate time zones along with time math. <br>
*WHEN I provide time zone data (eg. abbreviation: EST, CST or hour: -1, +1 or minute: -60, +60)*<br>
__THEN__ I get the current time in that time zone<br>
*WHEN I provide time zone data and a time (eg 10:44:15 AM)*<br>
__THEN__ I get that time stamp converted into what it would be in that time zone<br>
*WHEN I call the time addition/subtraction function(s) and give it a time stamp (h:mm:s: or s) along with another time stamp (h:mm:s: or s)* <br>
__THEN__ I get the calculated time stamp <br>
*WHEN I call the time convert function for a 12 with meridian time stamp* <br>
__THEN__ I get the time stamp in 24 hour time format <br>
*WHEN I call the time format function ( h:mm:s | h:mm:s tt | h:m | m | s ) with a time stamp ( h:mm:s | h:mm:s tt | h:m | m | s )* <br>
__THEN__ I get that time stamp converted into the format that was provided <br>

## Docs

## Formatting Parameters

<table>
<tr>
<th>Parameter</th>
<th>Effect</th>
</tr>
<tr>
<td>h</td>
<td>Hour as a number from 1 to 12 when using the 12-hour clock. If the hour number is a single-digit number, it's displayed without a leading zero.</td>
</tr>
<tr>
<td>hh</td>
<td>Hour in two digits using the 12-hour clock. If the hour number is a single-digit number, it's displayed with a leading zero.</td>
</tr>
<tr>
<td>H</td>
<td>Hour as a number from 0 to 23 when using the 24-hour clock. For example, in this format, 1 pm would be represented as 13. If the hour number is a single-digit number, it's displayed without a leading zero.</td>
</tr>
<tr>
<td>HH</td>
<td>Hour in two digits using the 24-hour clock. For example, in this format, 1 pm would be represented as 13. If the hour number is a single-digit number, it's displayed with a leading zero.</td>
</tr>
<tr>
<td>m</td>
<td>Minutes as a number from 0 to 59. If the minute number is a single-digit number, it's displayed without a leading zero.</td>
</tr>
<tr>
<td>mm</td>
<td>Minutes in two digits. If the minute number is a single-digit number, it's displayed with a leading zero.</td>
</tr>
<tr>
<td>s</td>
<td>Seconds as a number from 0 to 59. If the second number is a single-digit number, it's displayed without a leading zero.</td>
</tr>
<tr>
<td>ss</td>
<td>Seconds in two digits. If the second number is a single-digit number, it's displayed with a leading zero.</td>
</tr>
<tr>
<td>t</td>
<td>am or pm as two letters: am or pm as defined on your system.</td>
</tr>
<tr>
<td>tt</td>
<td>a.m. or p.m. as two letters: a.m. or p.m. as defined on your system.</td>
</tr>
<td>T</td>
<td>AM or PM as two letters: AM or PM as defined on your system.</td>
</tr>
<tr>
<td>TT</td>
<td>A.M. or P.M. as two letters: A.M. or P.M. as defined on your system.</td>
</tr>
</table>

## Authors

Stephen Merki