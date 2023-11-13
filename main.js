// *Dramatic music*
console.log("Hello World!");
timeLookup();

/*  NOTES

    As this is planned to be a module, the extension can be .mjs instead of .js
    Not super important, we can check what the standard is on NPM.

    Variables will be local to each function so they cannot interfere with each other.

*/

/* TODO

    Fulfill business needs with functions:
    - timeLookup = Time Zone input --> Current time
    - timeConvert = Time Zone and timestamp input --> Converted time
    - timeDifference = Time addition/subtraction
    - cycleConvert = Time cycle converter (12hr --> 24hr)
    - timeFormat = Timestamp formatter

    Receive inputs and sanitize

*/

// Receives tZone String returns the current time in that zone.
function timeLookup(tZone) {
    // Declaration for date
    // Default Date object provides the current date in local (system runtime) locale
    const date = new Date();
    console.log(new Intl.DateTimeFormat('en-US').format(date)); // We will be using this a lot
}

// Receives tZone String and time (eg 10:44:15 AM), returns converted timestamp.
function timeConvert(tZone, time) {

}

// Receives two time arguments and calculates the difference.
function timeDifference(t1, t2) {

}

// Receives time input with 12 hr cycle and converts to 24 hr.
function cycleConvert(time) {

}

// Receives a format and time and returns the time in that format.
function timeFormat(format, time) {

}