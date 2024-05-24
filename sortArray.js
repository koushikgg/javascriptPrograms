let array1=[1,2,6,3,9,4,7]
for (let i =0;i<array1.length;i++){
    for (let j=0; j<array1.length-i-1;j++){
        if (array1[j]>array1[j+1]){
            let temp = array1[j];
            array1[j]=array1[j+1]
            array1[j+1]=temp
        }
    }
}
console.log(`the is the acesding order ${array1}`)
for (let i =0;i<array1.length;i++){
    for (let j=0; j<array1.length-i-1;j++){
        if (array1[j]<array1[j+1]){
            let temp = array1[j];
            array1[j]=array1[j+1]
            array1[j+1]=temp
        }
    }
}
console.log(`the is the decending order ${array1}`)