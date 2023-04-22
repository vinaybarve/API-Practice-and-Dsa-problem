function checkMagazine(n, m, magazine, note) {
  let count = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n; j++) {
      if (note[i] == magazine[j]) {
        note[i] = 0;
        magazine[i] = 0;
        break;
      }
    }
  }
  for (i = 0; i < m; i++) {
    if (note[i] !== 0) {
      console.log("No");
      count = 1;
      break;
    }
  }

  if (count === 0) {
    console.log("Yes");
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let x = input[0].trim().split(" ");
  let n = +x[0];
  let m = +x[1];

  let magazine = input[1];
  let note = input[2];
  checkMagazine(n, m, magazine, note);
}

if (process.env.USER === "") {
  runProgram("");
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgramm(read);
    process.et(0);
  });
}
