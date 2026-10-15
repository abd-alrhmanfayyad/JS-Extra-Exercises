function q1() {
    const x = 4.3;
    const y = 4;

    console.log("-9 * 3 =", -9 * 3);
    console.log('"value is " + 50 =', "value is " + 50);
    console.log("17 % 5 =", 17 % 5);
    console.log("5 % 17 =", 5 % 17);
    console.log("5 / 10 =", 5 / 10);
    console.log("(4 == 4) =", 4 == 4);
    console.log("(4 != 5) =", 4 != 5);
    console.log("(7 <= 8) =", 7 <= 8);
    console.log("Math.ceil(4.3) - Math.floor(4.3) =", Math.ceil(x) - Math.floor(x));
    console.log("Math.ceil(4) - Math.floor(4) =", Math.ceil(y) - Math.floor(y));
}
function q2() {
    const num = prompt("Enter a number:");
    alert(`You entered: ${num}`);
    console.log(num, typeof num);
}

function q3() {
    const num1 = Number(prompt("Enter the first number:"));
    const num2 = Number(prompt("Enter the second number:"));

    if (num1 > num2) {
        alert(`${num2}, ${num1}`);
    } else {
        alert(`${num1}, ${num2}`);
    }
}

function q4() {
    const num1 = Number(prompt("Enter the first number:"));
    const num2 = Number(prompt("Enter the second number:"));

    if (num1 > num2) {
        alert(`The larger number is ${num1}`);
    } else if (num2 > num1) {
        alert(`The larger number is ${num2}`);
    } else {
        alert("Both numbers are equal");
    }
}

function q5() {
    const a = prompt("Enter the first number:");
    const b = prompt("Enter the second number:");

    console.log("Without Number():", a + b);
    console.log("With Number():", Number(a) + Number(b));

    alert(`The sum is ${Number(a) + Number(b)}`);
}
function q6()
{
        const num = prompt("Enter a number:");
      
switch(Number(num)){
 
  case 1:
    alert("ONE") ;
    break;

  case 2:
    alert("TWO") ;
    break;

  case 3:
     alert("THREE") ;
    break;

    case 4:
     alert("FOUR") ;
    break;


   case 5:
     alert("FIVE") ;
    break;


    
   case 6:
     alert("SIX") ;
    break;

     case 7:
     alert("SEVEN") ;
    break;

     case 8:
     alert("EIGHT") ;
    break;

     case 9:
     alert("NINE") ;
    break;

  default:
      alert("PLEASE TRY AGAIN") ;
}
    

}