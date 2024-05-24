let string1="madam";
let string2="madam";
var countstring1={};
var countstring2={};
if (string1.length!==string2.length){
    console.log("it is not Anagram");
}
else{
    for (let i=0;i<string1.length;i++){
        var char1=string1[i];
        var char2=string2[i];
        if (countstring1[char1]){
            countstring1[char1]++;
        }
        else{
            countstring1[char1]=1;
        }
        if (countstring2[char2]){
            countstring2[char2]++;
        }
        else{
            countstring2[char2]=1;
        }
    }
    let count=0;
    for (value in countstring1){
        if (countstring1[value]!==countstring2[value]){
            count++;
        }
    }
    if (count===0){
        console.log("it is Anagram")
    }else{
        console.log("it is not Anagramm")
    }
}