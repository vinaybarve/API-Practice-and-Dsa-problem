// Due to recent pandemic announcement we need to make
// a stock requirement generator, where all the items required
// for a week with price are given.

// For one week:
// 1. Flour = 5kg| Price = 110 per kg
// 2. Rice = 2kg| Price = 120 per kg
// 3. Sugar = 2kg| Price = 42 per kg
// 4. Pulse = 3kg| Price = 53 per kg
// 5. Bread = 2 packet | Price = 40 per packet
// 6. Milk = 5 litre| Price = 32 per litre
// 7. Oil = 2 litre| Price = 126 per litre

// The user will give N number of weeks for stock calculation
//  with a list of 7 elements with 0 and 1 representing each item
//  in the list, if the element is 0 then that item is not required
//  by the person.

// The output should be the overall cost of the items for that
// number of weeks.

// Sample Input 1

// 4
// 0 1 1 1 0 0 1

// Sample Output 1
// 2940

let N = 4;
let arr = [0, 1, 1, 1, 0, 0, 1];

function stockItUp(N, arr) {
  let total = 0;
  for (let i = 0; i < N; i++) {
    total = total + 110 * 5 * arr[0] + 120 * 2 * arr[1] + 42 * 2 * arr[2] + 53 * 3 * arr[3] + 40 * 2 * arr[4] + 32 * 5 * arr[5] +  126 * 2 * arr[6];
  }
  console.log(total);
}
stockItUp(N, arr);
