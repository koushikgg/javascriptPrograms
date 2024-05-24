let string1='koushik g';
let length=0;
let string2=''
for (value of string1){
    length++;
}
for (let i =0;i<length;i++){
    if (i===length-1){
        string2+=string1[i].toUpperCase();
    }
    else{
        string2+=string1[i];
    }
}
console.log(string2)