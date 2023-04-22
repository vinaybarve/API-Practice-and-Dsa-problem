function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + "hrs" + " " + minutes + "mins";
}

let num = 340;
console.log(time_convert(num));
