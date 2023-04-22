let day = "Wednesday";
let n = 8;

function dayWeek(day, n) {
  let names = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let obj = {};
  for (let i = 0; i < names.length; i++) {
    obj[names[i]] = i;
  }
  let value = 0;
  for (key in obj) {
    if (key == day) {
      value = obj[key] + n;
    }
  }
  value = value % 7;

  for (key in obj) {
    if (obj[key] == value) {
      console.log(key);
    }
  }
}
dayWeek(day, n);
