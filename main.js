// *Dramatic music*
console.log("Hello World!");

/*  NOTES

    As this is planned to be a module, the extension can be .mjs instead of .js
    Not super important, we can check what the standard is on NPM.

    Variables will be local to each function so they cannot interfere with each other.

*/

/* TODO

    Fulfill business needs with functions:
    - timeLookup = Time Zone input (as string or number) --> Current time
    - timeConvert = Time Zone (as string or number) and timestamp input --> Converted time
    - timeDifference = Time addition/subtraction
    - cycleConvert = Time cycle converter (12hr --> 24hr) || (24hr --> 12hr )
    - timeFormat = Timestamp formatter

    Receive inputs and sanitize

*/

// Receives tZone String or Number then returns the current time in that time zone.
function timeLookup(tZone) {
    // Declaration for date
    // Default Date object provides the current date in local (system runtime) locale
    const date = new Date();
    console.log(new Intl.DateTimeFormat('en-US').format(date)); // We will be using this a lot
}

// Receives tZone String/Number and time (eg 10:44:15 AM), returns converted timestamp.
function timeConvert(tZone, time) {

}

// Receives two time arguments and calculates the difference.
const timeCompare = {
    timeDifference: function(t1, t2) {
        console.log(t1-t2);
    },
    timeSum: function(t1, t2) {
        console.log(t1+t2);
    }
}

// Receives time input of either 12 or 24 hour and converts it to the opposite format.
function cycleConvert(time) {

}

// Receives a format and time and returns the time in that format.
function timeFormat(format, time) {

}

timeLookup();
timeCompare.timeDifference(9, 6);
timeCompare.timeSum(4, 9);