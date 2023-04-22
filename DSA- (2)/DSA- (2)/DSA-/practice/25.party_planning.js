let pamId = [1, 2, 2, 3, 4, 5];

let jimId = [1, 2, 3, 4, 5, 5];

function partyplanning(pamId, jimId) {
  let obj = {};
  for (let i = 0; i < pamId; i++) {
    let char = pamId[i];
    if (obj[char] == undefined) {
      obj[char] = 1;
    }
  }
  for (let i = 0; i < jimId; i++) {
    let char2 = jimId[i];
    if (char2 == undefined) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
partyplanning(pamId, jimId);
