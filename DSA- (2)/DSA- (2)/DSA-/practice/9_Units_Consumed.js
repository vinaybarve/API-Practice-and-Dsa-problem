// Electricity consumption is measured via slab rates for a particular wattage capacity,
//  which is as follows

// 0-50 unit = 3rs
// 51-150 unit= 5rs
// 150 and above units=10 rs

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.
// You are given total amount of bill, N , you need to find total unit consumed.

// Sample Input 1
// 930

// Sample Output 1
// 170

// Hint:

// Total 930 rupees is the bill amount.

// So total unit consumed would be 170. See calculation below.

// Charges for 170 units :-

// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930.


// In this question,we are given a certain amount, and we have to find the number of units 
// consumed. 
// The question states that for the first 50 units, the cost associated is 3 Rs per unit,
// and for the next 51 to 150 units,the cost is Rs 5 per unit. 
// Finally, if the number of units exceed 150, the the cost will be 10 Rs per unit.
// Also, a fixed charge of Rs 80 is applied on each bill. 
// An important observation here can be if the bill is less than or equal to 230,
// then the number of units will be less than 50, as the maximum price that can be achieved
// with a cost of 3,and a fixed charge of 80 is 230.
// Similarly, if the total cost is less than 730, then the number of units will be less than 
// or equal to 150, 
// as for the first 50 units the cost will be 150, 
// and for the next 100 units the cost will be 500,
// combined with a fixed charge of 80 Rs.
// Otherwise, if the total cost exceeds 730, then we can say that the number of units will be greater than 150.
// Mathematically, we can say that

// If the cost C is less than or equal to 230, then the number of units will be 
// (N - 80)/3.
// If the cost C is greater than 230, and less than 730, then the number of units will be 
// 50 + (N - 150 - 80)/5
// If the cost C is greater than 730, then the number of units will be
//  150 + (N - 650 - 80)/10


let n=930;
function unitsConsumed(n) {
  n = n - 80;
  let unit_consumed;
  
  if (n <= 150) {
    unit_consumed = n / 3;
  } else if (n <= 650) {
    unit_consumed = 50 + (n - 150) / 5;
  } else {
    unit_consumed = 150 + (n - 650) / 10;
  }
  console.log(unit_consumed);
}
unitsConsumed(n)