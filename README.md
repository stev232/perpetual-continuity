# perpetual-continuity

## Description

This project will use JavaScript and will go onto node package manager as a utility.<br>
Time Zone Conversion; either accepts a string (EST, CST, etc.) hour difference (+/- 1-23) minute difference (+/- interval of 60)<br>
24hour-12hour or 12hour-24hour time conversions<br>
Time formatter (hh:mm:ss Meridian, H: m:s no Meridian) Capital H will be for 24 hour and lower case h will be for 12 hour.<br>
Time Math (could have two times inserted to find the difference, could have a time and then the difference and output the new time)<br>

## Criteria

GIVEN I am using a time manipulation library to help me format and calculate time zones along with time math. <br>
_WHEN_ I provide time zone data (eg. abbreviation: EST, CST or hour: -1, +1 or minute: -60, +60)<br>
*THEN* I get the current time in that time zone<br>
_WHEN_ I provide time zone data and a time (eg 10:44:15 AM)<br>
*THEN* I get that time stamp converted into what it would be in that time zone<br>
_WHEN_ I call the time addition/subtraction function(s) and give it a time stamp (h:mm:s: or s) along with another time stamp (h:mm:s: or s) <br>
*THEN* I get the calculated time stamp <br>
_WHEN_ I call the time convert function for a 12 with meridian time stamp <br>
*THEN* I get the time stamp in 24 hour time format <br>
_WHEN_ I call the time format function ( h:mm:s | h:mm:s tt | h:m | m | s ) with a time stamp ( h:mm:s | h:mm:s tt | h:m | m | s ) <br>
*THEN* I get that time stamp converted into the format that was provided <br>

## Docs

## Authors

Stephen Merki