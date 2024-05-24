let string1='koushik G reddy';
var smallChar='z';
var largeChar='A';
for (value of string1){
    if ((value>='A' && value<='Z')|| (value>='a' && value <='z')){
        if (value<smallChar){
            smallChar=value
        }
        if (value>largeChar){
            largeChar=value
        }
    }
}
console.log(`the Smallest char is ${smallChar}`)
console.log(`the largest char is ${largeChar}`)