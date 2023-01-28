let arr=[21,21,45,89,64,56,56,89,56,67]
;
let arr1=[];
var temp=0
for(let i=0;i<arr.length;i++)
{
    temp=0;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            temp=1;
        }
    }
    if(temp==0)
    arr1.push(arr[i])
}
console.log(arr1)