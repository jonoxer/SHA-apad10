function updateClock()
{
  var currentTime = new Date ( );

  var currentHours   = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var currentDay     = currentTime.getDay ( );
  var currentMonth   = currentTime.getMonth( ); 
  var currentDate    = currentTime.getDate( );

  //Convert the day component to day abbreviation
  currentDay = ( currentDay == 0 ) ? "Sunday" : currentDay;
  currentDay = ( currentDay == 1 ) ? "Monday" : currentDay;
  currentDay = ( currentDay == 2 ) ? "Tuesday" : currentDay;
  currentDay = ( currentDay == 3 ) ? "Wednesday" : currentDay;
  currentDay = ( currentDay == 4 ) ? "Thursday" : currentDay;
  currentDay = ( currentDay == 5 ) ? "Friday" : currentDay;
  currentDay = ( currentDay == 6 ) ? "Saturday" : currentDay;

  //Convert the month component to text month
  currentMonth = ( currentMonth == 0 ) ? "Jan" : currentMonth;
  currentMonth = ( currentMonth == 1 ) ? "Feb" : currentMonth;
  currentMonth = ( currentMonth == 2 ) ? "Mar" : currentMonth;
  currentMonth = ( currentMonth == 3 ) ? "Apr" : currentMonth;
  currentMonth = ( currentMonth == 4 ) ? "May" : currentMonth;
  currentMonth = ( currentMonth == 5 ) ? "Jun" : currentMonth;
  currentMonth = ( currentMonth == 6 ) ? "Jul" : currentMonth;
  currentMonth = ( currentMonth == 7 ) ? "Aug" : currentMonth;
  currentMonth = ( currentMonth == 8 ) ? "Sep" : currentMonth;
  currentMonth = ( currentMonth == 9 ) ? "Oct" : currentMonth;
  currentMonth = ( currentMonth == 10) ? "Nov" : currentMonth;
  currentMonth = ( currentMonth == 11) ? "Dec" : currentMonth;

  // Add suffix to the date
  currentDate = ( currentDate == 1 || currentDate == 21 || currentDate == 31 ) ? currentDate + "st" : currentDate;
  currentDate = ( currentDate == 2 || currentDate == 22 ) ? currentDate + "nd" : currentDate;
  currentDate = ( currentDate == 3 ) || currentDate == 23 ? currentDate + "rd" : currentDate;
  currentDate = ( currentDate > 3 || currentDate < 21 || currentDate > 23 || currentDate < 31 ) ? currentDate + "th" : currentDate;

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentDay + " " + currentMonth + " " + currentDate + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

setInterval('updateClock()', 1000 );
