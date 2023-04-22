// You are given a square matrix of size N x N. Rotate the matrix by 180 degrees.
// input:
// 3;
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

// output:
// 9 8 7 
// 6 5 4 
// 3 2 1 

let N=3;
let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]]

            function Rotate180(N,matrix){
                for(let i=N-1; i>=0; i--){
                    let bag=''
                    for(let j=N-1; j>=0; j--){
                        bag=bag+matrix[i][j]+" "
                    }
                    console.log(bag)
                }
            }
            Rotate180(N,matrix)

