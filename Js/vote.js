let age=18;
if(age>18)
{
    console.log("You are eligible to vote");
}
else if(age==18)
{
    console.log("You are not eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
console.log(age>18?"you are eligible":"Not eligible");


switch(age)
{
    case 18:
        console.log("You are eligible to vote");
        break;
        case 15:
            console.log("you are not eligible to vote");
            break;
            default:
                console.log("You are not eligible to vote");
}



a=15
while(a>12)
{
console.log(a);
a--;
}

for(let a=0;a<5;a++)
{
    console.log(a);
}