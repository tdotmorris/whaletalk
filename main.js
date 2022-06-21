let input = 'code every day';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultsArray = [''];

for (let i = 0; i < input.length; i++) {
    const letters = input[i];
    
    for (let j = 0; j < vowels.length; j++)
        if(input[i] === vowels[j]) {
            if(input[i] === "e") {
              resultsArray.push('ee');
            } else if(input[i] === "u"){
              resultsArray.push('uu');
            } else {
              resultsArray.push(input[i]);
            }
        }
}

console.log((resultsArray.join('')).toUpperCase());
