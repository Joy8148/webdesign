/* let myvar="Poulinal joy";
const v="Joy";

console.log("my string is"+myvar)
console.log("my string length is"+myvar.length)
console.log(myvar[9])
console.log(myvar.toLowerCase())
console.log("this is printing")
a=2614
b=876521
console.log(a+b)
console.log(myvar.split(''))
console.log(myvar.toUpperCase())
console.log(myvar.charAt(Math.random()))
console.log(myvar.charAt(Math.random()*13)) */

let age=18;

if(age>18)
{
    console.log("you are adult");
}
else if(age==18)
{
    console.log("you are 18");
}
else{
    console.log("you are not adult");
}

console.log(age>18?"you are adult":"Not Adult")

switch(age)
{
    case 18:
        console.log("you are 18");
        break;
        case 19:
            console.log("you are 19");
            break;
            default:
                console.log("you are not 18");
                
}