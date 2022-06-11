var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  milsec = dateInfo.getMilliseconds();
  var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);
    function setAngle(line, angle) {
        document.querySelector("." + line).style.transform = "rotate(" + angle + "deg)";
      }
      setAngle("hr-line", hrAngle);
setAngle("min-line", minAngle);
setAngle("sec-line", secAngle);