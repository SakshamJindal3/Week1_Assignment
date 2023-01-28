let name={
    fname:"Saksham",
    Lname:"jindal",

};
let name1={
    fname:"Jasmine",
    Lname:"Thakur",

};
//console.log(name.fullname());
let fullname = function(relation="",Rname=""){
    console.log(this.fname+ " "+this.Lname+relation+Rname);
};
let x=fullname.call(name," s/0")//call take parameters
let y=fullname.apply(name,[" s/0"," Sanjeev k Jindal"])//apply take parameters in Array format
let pn=fullname.bind(name1," D/0"," Ajay Thakur");//bind always returns a function
pn();

