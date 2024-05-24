const array1= [1,2,4,2,6,6];
const array2= [3,5,8,2,4,7];
const uniqueArray = [];
for (value of array1){
    let count=0;
    for (value1 of uniqueArray){
        if (value1===value){
            count++;
        }
    }
    if (count===0){
        uniqueArray.push(value)
    }
}
for (value of array2){
    let count=0;
    for (value1 of uniqueArray){
        if (value1===value){
            count++;
        }
    }
    if (count===0){
        uniqueArray.push(value)
    }
}
console.log(uniqueArray)