

function generateArray(start, end) {
// Create an empty array to store the result

     const result = [];

// Determine the direction of counting

 const step = start <= end ? 1 : -1;

 for (let i = start; i !== end; i += step) {
   result.push(i);
 }
// Return the generated array

 return result;
}

// Test for the function

console.log(generateArray(1, 11));
