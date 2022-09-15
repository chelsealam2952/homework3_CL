// taking the  input from the user
const number = parseInt(prompt('Enter an number to print multiplication table for: '));

//for loop 
for(let i = 0; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    //  result
    console.log(`${number} X ${i} = ${result}`);
}