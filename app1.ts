
const number = 0.1;
const number2 = 0.2;
const text = "Total no: ";
const printResult = true;

function add(
  n1: number,
  n2: number,
  showResults: boolean,
  resultText: string) {
  if (showResults) {
    const result = n1 + n2;
    console.log(resultText + result)
  } 
}

add(number, number2, printResult, text);



// Testing typesript part 1