const num1 = Number(prompt("Enter your first number: "));
const num2 = Number(prompt("Enter your second number: "));
const Ops = prompt("Enter Mathematical operation (Addition/Substraction/Division/Modulo):");
if(Ops === "Addition") {
  alert(`${num1} + ${num2} = ${num1+num2}`);
} else if (Ops === "Substraction"){
  alert(`${num1} - ${num2} = ${num1-num2}`);
} else if (Ops === "Multiplication"){
  alert(`${num1} * ${num2} = ${num1*num2}`);
} else if (Ops === "Division"){
  alert(`${num1} / ${num2} = ${num1/num2}`);
} else if (Ops === "Modulo"){
  alert(`${num1} % ${num2} = ${num1%num2}`);
}