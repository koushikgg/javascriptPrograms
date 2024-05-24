const array1=[1,2,4,-8,5,9,7];
var minValue=null;
var maxValue=null;

for (value of array1){
    if(value>maxValue){
        maxValue=value;
    }
    if(value<minValue){
        minValue=value;
    }
}
console.log(`the minimum value is ${minValue}`)
console.log(`the maximum value is ${maxValue}`)