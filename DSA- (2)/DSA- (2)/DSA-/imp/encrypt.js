function EncryptedSequence(n, arr) {
  let stack = [];
  stack.push(arr[0]);

  let i = 1;
  let j = n - 1;
  while (i < j) {
    stack.push(arr[j]);
    stack.push(arr[i]);
    j--;
    i++;
  }
  if (n % 2 === 0) {
    stack.push(arr[n / 2]);
  }

  console.log(stack.join(" "));
}

let n = 5;
let arr = [1, 3, 5, 4, 2];
EncryptedSequence(n, arr);
