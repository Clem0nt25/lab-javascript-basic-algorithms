2// Iteration 1: Names and Input
let hacker1 = "Elisa"
let hacker2 = "Clemens"

/*console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)*/

// Iteration 2: Conditionals

/*
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
} else {
    console.log("Input Value is not a string")
} */


// Iteration 3: Loops
// 3.1

let name = ""

for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase()

    if (i < hacker1.length - 1) {
        name += " "
    }
    

}

//console.log(name)

// 3.2
let navigator = ""
for (let i = hacker2.length - 1; i > -1; i--) {
    navigator += hacker2[i]
}
//console.log(navigator)


//3.3 

for (let i = 0; i < hacker1.length; i++) {
    for (let j = 0; j < hacker2.length; i++) {
        
        console.log(hacker1[i])
        console.log(hacker2[j])

    }
}
