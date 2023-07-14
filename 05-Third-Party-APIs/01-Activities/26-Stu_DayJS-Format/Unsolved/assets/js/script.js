// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var graduation = dayjs("11-19-2022");
$('#1a').text(graduation.format('MMM D, YYYY'));
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayWeek = dayjs("1-1-2027");
$('#2a').text(dayWeek.format('dddd'));
// TODO: 3. What is the current time in the format: hours:minutes:seconds
var crrntTime = dayjs().format('hh:mm:ss a');
$('#3a').text(crrntTime);
// TODO: 4. What is the current Unix timestamp?
var unix = dayjs().unix();
$('#4a').text(unix);
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var Timestamp = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a');
$('#5a').text(Timestamp);
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

