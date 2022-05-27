{
    const name = prompt("What is your name ?");
    const question = prompt(`${name}, What is your favourite movie ?`);
    const age = Number(prompt(`${name}, How old are you ?`));

    if (age > 16) {
    alert("You are eligible");
    } else {
    alert("It seem you are " + age);
    }
}

{
    const operator = prompt("You have to chose one of the following operators: " + "-  +  %  /" );
    const number1 = prompt("Enter number 1");
    const number2 = prompt("Enter number 2");

    switch(operator){
        case "%":
            alert(number1 % number2);
            break;  
        case "-":
            alert(number1 - number2);
            break;
        case "+":
            alert(number1 + number2);
            break;
        case "/":
            alert(number1 / number2);
        break;
        default:
            alert("You have to chose the right operators");  
    }
}


{
    const name = prompt("What is your name ? ");
    const age = prompt("What is your age ? ");
    const calculateAge = new Date().getFullYear() - age;
    alert(`Hello, ${name}, I am only a console,but it is nice to meet you.`)
    alert(`I have heard you are ${age} of age,that means you were born in ${calculateAge}`);
}


