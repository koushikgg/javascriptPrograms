let string1='king_virat_kohli_7'
let countstring1={}
for (let i=0;i<string1.length;i++){
    if ((string1[i]>='A' && string1[i]<='Z') || (string1[i]>='a' && string1[i]<='z')){
        var char1=string1[i];
        if (countstring1[char1]){
            countstring1[char1]++;
        }
        else{
            countstring1[char1]=1;
        }
    }
}
console.log(countstring1)