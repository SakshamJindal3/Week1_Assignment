const str="Hi Inzint I am John";
var str1;
var result="";
str1=str.split(" ");
for(let i=str1.length-1;i>=0;i--){
    result=result+str1[i]+" ";
}
console.log(result);