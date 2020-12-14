$(document).ready(function () {
  var d = new Date();

  let hour = d.getHours()
  let am = "AM"
  if (hour>12){
    hour = hour-12
  }
  if(hour>11){
    am = "PM"
  }
  const formattedHour = ("0" + hour).slice(-2);

  const minute = d.getMinutes()
  const formattedMinute = ("0" + minute).slice(-2);

  $('#time').text(`${formattedHour}:${formattedMinute}`);
  $('#am').text(am);

  const date = d.getDate()	
  const month = d.getMonth()
  const year = d.getFullYear()
  const dates = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  const dateString = `${date} ${dates[month]} ${year}`
  $('#date').text(dateString)

  const firstNames = ["HSIEN LOONG", "AMOS", "JAY", "ANDREW", "JANE", "SARAH", "COLLIN", "JOSHUA", "WEI MING", "ANDERSON", "NOAH", "WILLIAM", "EMMAH", "JING WEI", "ZHENG JIE", "WEI MING", "JIE SHAO", "JIA SHAO"]
  const surNames = ["LEE", "YEE", "CHOU", "TAN", "LEE", "LIM", "LI", "LAW", "TOSHIBA", "MURAMOTO", "JIANG", "NG", "WEE", "SIVARAJASINGAM", "SOH", "HO", "CHIA", "CHUA"]
  random15 = Math.floor(Math.random() * 15);
  const name = `${firstNames[random15]} ${surNames[random15]}`
  $('#name1').text(name);
  $('#name2').text(name);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  function getRndChar(){
    return String.fromCharCode(65+Math.floor(Math.random() * 26))
  }
  const id = `101${getRndInteger(7,9)}${getRndInteger(1000, 9999)}${getRndChar()}`
  $('#id1').text(id);
});
