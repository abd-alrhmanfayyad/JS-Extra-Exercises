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
function q6() {
    const num = prompt("Enter a number:");

    switch (Number(num)) {

        case 1:
            alert("ONE");
            break;

        case 2:
            alert("TWO");
            break;

        case 3:
            alert("THREE");
            break;

        case 4:
            alert("FOUR");
            break;


        case 5:
            alert("FIVE");
            break;



        case 6:
            alert("SIX");
            break;

        case 7:
            alert("SEVEN");
            break;

        case 8:
            alert("EIGHT");
            break;

        case 9:
            alert("NINE");
            break;

        default:
            alert("PLEASE TRY AGAIN");
    }


}

function q7() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
        console.log(i)
    }


}
function q8() {
    let numbers = "";
    for (let i = 0; i <= 5; i++) {
        numbers += i + " ";
        console.log(i)
    }

    alert(numbers);
}

//Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
function q9() {
    let numbers = "";
    for (let i = 0; i <= 20; i++) {
        if (i % 3 === 0) {
            numbers += i + " ";
            console.log(i)
        }
    }

    alert(numbers);
}
//Q10: Prompt the user for a number in the range 0…100.
//   If the number is out of range, display an error message and prompt again until a valid number is entered.  
// Assume the user enters a number each time
function q10() {
    let num = Number(prompt("Enter a number in the range 0...100:"));

    while (!(num >= 0 && num <= 100)) {
        alert("Error: the number must be between 0 and 100. Try again.");
        num = Number(prompt("Enter a number in the range 0...100:"));
    }

    alert(`You entered: ${num}`);
}

//Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number. 
//  Hint: the built in function isNaN(x) returns true if x is not a number. 
//  It returns false if x is a number.  Sort of backwards, but that's what's available.

function q11() {
    let num;

    while (true) {
        const input = prompt("Enter a number in the range 0...100:");

        if (input === null || input.trim() === "" || isNaN(input)) {
            alert("Error: please enter a number.");
        } else if (Number(input) < 0 || Number(input) > 100) {
            alert("Error: the number must be between 0 and 100.");
        } else {
            num = Number(input);
            break;
        }
    }

    alert(`You entered: ${num}`);
}
//Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered. 
//  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
function q12() {

    let sum = 0;
    let num;
    while (true) {
        const input = prompt("Enter a whole number: ");

        if (input === null || input.trim() === "" || isNaN(input) || !Number.isInteger(Number(input))) {
            alert("Error:please enter a whole number");
        } else {
            num = Number(input);
            break;
        }
    }
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    alert(`sum=  ${sum}`);

}

function q13() {
    let sum = 0;
    let num;

    while (true) {
        const input = prompt("Enter a whole number (0 or more):");

        if (input === null || input.trim() === "" || isNaN(input) || !Number.isInteger(Number(input)) || Number(input) < 0) {
            alert("Error: please enter a whole number (0 or more).");
        } else {
            num = Number(input);
            break;
        }
    }

    for (let i = 0; i <= num; i++) {
        sum += i;
    }

    const average = sum / (num + 1);
    alert(`The average is ${average}`);
}


