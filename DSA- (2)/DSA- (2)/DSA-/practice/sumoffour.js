let num = 2348729;

function conevert(num) {
  let sum = 0;
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    sum = sum + parseInt(strNum[i]);
  }
  console.log(sum);
}

conevert(num);
