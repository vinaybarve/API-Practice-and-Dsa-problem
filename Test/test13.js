function masaiUniqueness(string) {

    // let object = {}

    let flag = 0;
    for(let i = 0; i < string.length; i++){
        for(let j = i+1; j < string.length; j++){
            if(string[i] === string[j]){
                flag=1;
            }
        }
    }
    if(flag === 0){
        console.log("Unique")
    }else {
        console.log("No")
    }
    

}

function runProgram(input) {
    input = input.trim().split("");
    masaiUniqueness(input);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`masai`);
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
        runProgram(read);
        process.exit(0);
    });
}
