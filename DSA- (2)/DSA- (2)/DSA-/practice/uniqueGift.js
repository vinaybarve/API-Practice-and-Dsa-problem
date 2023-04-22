function func(str) {
  let box = {};
  for (let i = 0; i < str.length; i++) {
    box[str[i]] = 0;
  }

  let que = [];
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    box[str[i]]++;
    que.push(str[i]);

    while (que.length > 0) {
      if (box[que[0]] == 1) {
        break;
      } else {
        que.shift();
      }
    }

    if (que.length == 0) {
      ans += "#";
    } else {
      ans += que[0];
    }
  }
  console.log(ans);
}

let str = "abcabc";
func(str);
