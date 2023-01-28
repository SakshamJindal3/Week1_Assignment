//Strings...

//Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
//Slice()
let part = text.slice(7, 13);
console.log(part);
//Substring()
let part2 = text.substring(7, -1);
console.log(part2);
//Substr()
let part3 = text.substr(1, 3);
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
console.log(part3);
//Concatination
let part4=text+"aa,bb,cc,dd";
console.log(part4);

//Array...
let a=[1,2,3,4,5,6,7,8,9,10];//length
console.log(a.length)
a.push(11)//push
console.log(a)
a.pop()//pop
console.log(a)
a.reverse()//reverse
console.log(a)
let b=a.join("*")//join
console.log(b)


