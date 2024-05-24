const array1=[1,2,4,6,3,7,10];
for (let i =0; i<array1.length-1;i+=2){
    let temp =array1[i]
    array1[i]=array1[i+1]
    array1[i+1]=temp
}
console.log(array1)
