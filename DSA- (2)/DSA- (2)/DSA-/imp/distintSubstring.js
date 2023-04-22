let str = "abcde";
function distintSubstring(str) {
  let result = new Set();
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.add(str.substring(i, j));
    }
  }
  console.log(result.size);
}
distintSubstring(str);
