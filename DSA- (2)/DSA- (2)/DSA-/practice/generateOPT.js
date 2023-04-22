function generateOTp() {
  var digits = "012345";
  let otp = "";
  for (let i = 0; i < digits.length; i++) {
    otp += digits[Math.floor(Math.random() * 5)];
  }
  return otp;
}
console.log(generateOTp());
