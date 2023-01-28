let n=5;//enter the number
function fibo(n) {
    if(n<2)
    {
        return n;
    }
    else
    {
        return fibo(n-1)+fibo(n-2);
    }
}
for(let i=0;i<n;i++)
{
    console.log(fibo(i));
}
