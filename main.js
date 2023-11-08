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
    - Time Zone input --> Current time
    - Time Zone and timestamp input --> Converted time
    - Time addition/subtraction
    - Time cycle converter (12hr --> 24hr)
    - Timestamp formatter

*/

function timeLookup(tZone) {
    // Receives tZone String and looks up the current time in that zone.
    // Sanitize input

    // Declarations
    const date = new Date();

    // Default Date object provides the current date in local (system runtime) locale
    console.log(new Intl.DateTimeFormat('en-US').format(date));
}
