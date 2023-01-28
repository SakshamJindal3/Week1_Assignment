display=function(x){
    console.log(x);
}
myfunc=function(a,b,callback){//callback took value of display function
    let sum=a+b;
    callback(sum);
}
myfunc(20,30,display)//Returned display function as a parameter

let myPromise = new Promise(function(Resolve, Reject) {
    let x = 0;
     if (x == 0) {
      Resolve("Successfull")
     } else {
      Reject("Error");
     } });
    myPromise.then(
     function(first) {display(first);},//if resolve works then it will display Successfull 
     function(error) {display(error);}//if reject works then it will show Error
    );
    