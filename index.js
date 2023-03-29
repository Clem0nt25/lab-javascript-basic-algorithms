// Iteration 1: Names and Input

let hacker1 = "Clemens"
let hacker2 = "Anne"


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
} else {
    console.log("Input Value is not a string")
} 


// Iteration 3: Loops
// 3.1

let name = ""

for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase()

    if (i < hacker1.length - 1) {
        name += " "
    }
}

console.log(name)



// 3.2
let navigator = ""
for (let i = hacker2.length - 1; i > -1; i--) {
    navigator += hacker2[i]
}
console.log(navigator)


//3.3 

// while loop
let i = 0;

while (true) {

  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
    break
  } else if (hacker1[i] === hacker2[i]) {
    continue
  } else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.")
    break
  } else if (hacker2[i] < hacker1[i]) {
    console.log("Yo, the navigator goes first, definitely")
    break
  }

  i++;

}

// for loops
let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?")
        break
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely")
        break
    } else if (hacker2[i] > hacker1[i]) {
        console.log("The driver's name goes first.")
    } else if (hacker1[i] === hacker2[i]) {
        continue
    }
}


// Bonus 1: 

let longText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed diam arcu. Suspendisse consequat felis sed auctor venenatis. Duis quis eleifend purus. Suspendisse sed neque pellentesque, efficitur sem at, tempor ligula. Aenean aliquet lectus ac scelerisque facilisis. Ut sit amet massa lacus. Praesent id sapien quis dui interdum semper. Donec nec libero molestie, finibus arcu ut, tincidunt dui. Mauris imperdiet risus eget pharetra consectetur. Etiam non libero eu nisl vehicula egestas.

Ut aliquam interdum mi sit amet tincidunt. Nullam pulvinar, mi et dapibus feugiat, nisl felis tristique eros, eget mollis felis enim eu libero. Nulla laoreet tellus velit, sed volutpat neque tempus finibus. Pellentesque lacinia lectus lacinia ipsum viverra fringilla. Vivamus turpis risus, luctus eget cursus sit amet, finibus vitae libero. Curabitur vulputate fermentum turpis, sed ultricies felis accumsan sagittis. Integer vel felis et ex mollis venenatis.

Integer mi diam, volutpat eget tincidunt nec, feugiat at massa. Sed quis justo et nisi suscipit consequat. Curabitur in tincidunt nulla. Mauris nisl orci, porta at egestas aliquam, congue ac lacus. In hac habitasse platea dictumst. Pellentesque nibh nulla, tempor vel felis in, mollis lobortis mi. Nullam aliquam maximus metus, quis blandit risus commodo nec. Vestibulum interdum, nisi sit amet dictum porttitor, neque lectus sollicitudin dolor, quis consectetur lectus tortor a leo. Ut eu tincidunt metus. Nullam non malesuada ligula, ac eleifend lectus. Suspendisse ante mi, vestibulum quis augue quis, hendrerit pulvinar ante. Quisque ligula eros, dapibus tristique ultricies id, fermentum vel orci. Aliquam congue nisl et lobortis consequat. Etiam vitae erat eget tortor porta dictum sed ut sapien. Nullam dapibus, lorem a pellentesque auctor, justo urna tristique est, id gravida ante nibh ut neque. `

let counter = 0; 

for (let i = 0; i < longText.length; i++) {

    if (longText[i] === " ") {
        counter += 1;
    }
}

console.log(counter)
