// You are given an string of size N, of characters from 'a' to 'z'.
// You need to print number of times you can make "ping", using characters from string.
//  You can use a character only once from the string.

// For each test case, print number of times you can make "ping"

// Sample Input 1 
// 8
// pingping

// Sample Output 1

// 2
let n=8;
let str ="pingping"

function numberOfPing(n,str){
    a=0,b=0,c=0,d=0
    for(let i=0; i<n; i++){
        if(str[i]=='p')a++;
        if(str[i]=='i')b++;
        if(str[i]=='n')c++;
        if(str[i]=='g')d++;
    }
    let ans=n;
    if(ans>a){
       ans=a;
    }
    if(ans>b){
       ans=b;
    }
    if(ans>c){
       ans=c;
    }
    if(ans>d){
       ans=d;
    }
    console.log(ans)
  }
  numberOfPing(n,str)


 