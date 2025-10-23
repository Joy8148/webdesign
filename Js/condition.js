let age=14;
if(age>14)
{
    console.log("You are an adult");
}
else if(age==14)
{
    console.log("you are a minor");
}
else {
    console.log("you are an 14");
}
console.log(age>14?"you are adult":"Not adult")

switch(age)
{
    case 14:
        console.log("You are 14");
        break;
        case 15:
            console.log("You are 15");
            break;
            default:
                console.log("You are not 14");
                break;
    
    
    }
  