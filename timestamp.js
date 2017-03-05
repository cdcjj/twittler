function formatDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];
  var dayNames = [
    "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri", "Sat"
  ]

  var dayofWeek = date.getDay();
  var day= date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return dayNames[dayofWeek] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year;
}

// console.log(formatDate(new Date()));  // show current date-time in console