let string1="this is a string with duplicate words this is to remove";
let string2='';
let newObject={}
let length=0;
for (value1 of string1){
    length++
}
for (let i =0;i<length;i++){
    let value= string1[i];
    if (value== ' ' || i===length-1){
        if(i===length-1){
            string2+=value
        }
        if (!newObject[string2]){
            newObject[string2]=1;
        }
        string2=''
    }
    else{
        string2+=value
    }
}
string2='';
for (key in newObject){
    string2+=key+" "
}
console.log(string2)