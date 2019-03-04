let number = 300
console.log(number)

function fb(number){

    if (number % 3 == 0 && number % 5 == 0)
    console.log("fizzbuzz")
    else if (number % 3 == 0)
    console.log("fizz")
    else if (number % 5 == 0)
    console.log("buzz")
}

fb(number)
