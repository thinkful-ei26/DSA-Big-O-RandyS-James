// What is the input to the program
// What is the output of the program
// What is the input to each recursive calls
// What is the output of each recursive calls

// Counting Sheep
// function sheep(num) {
//     if(num === 0) {
//         return;
//     }
//     console.log(`${num} - Another sheep jump over the fence`);
//     sheep(num -1);
// }
// sheep(3);

//Array Double
// function double(arr){
//     if (!arr.length){
//         return [];
//     }
//     if (arr[0]) {
//         return [arr[0] * 2, ...double(arr.slice(1))];
//     }
//     return double(arr.slice(1));
// };
// var arr = [2,3,4];
// console.log(double(arr));

// Reverse String
// function reverse(str) {
//     if(!str.length) {
//         return "";
//     }
//     const newChar = str.slice(str.length - 1)
//     return newChar + reverse(str.slice(0, str.length -1));
// }
// console.log(reverse('hello'));

//nth triangular number
// function triangular(num) {
//     if(num === 0) {
//         return 0;
//     }
//     return num + triangular(num - 1)
// }
// console.log(triangular(3));

// String Splitter
// function split(str, seperator) {
//     if(!str.includes(seperator)) {
//         return [str];
//     }
//     let newStr = str.slice(0, str.indexOf(seperator))
//     let remainingStr = str.slice(str.indexOf(seperator) + 1, str.length)
//     return [newStr, ...split(remainingStr, seperator)]
// }
// console.log(split('the', ' ')); // will return ['the']
// console.log(split('the quick brown fox', ' ')) // will return ['the', 'quick', 'brown', 'fox']
// console.log(split('t', 't')) // will return ['', '']

// Binary Representation
// function binary(num) {
//     if(num <= 0) {
//         return '';
//     }
//     let binaryRep = Math.floor(num%2);
//     return binary(Math.floor(num/2)) + binaryRep;
// }
// console.log(binary(25));

// Factorial
// function factorial(num) {
//     if(num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }
// console.log(factorial(3));

// Fibonacci
// function fibonacci(num) {
//     if(num <= 2) {
//         return 1;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2) 
// }
// console.log(fibonacci(7)); // returns 13

// Anagrams 
function anagram(word) {
  if(word.length <= 1) {
      return [word];
  }
  let newWords = anagram(word.slice(1))
  let permutations = [];
  for(i = 0; i < newWords.length; i++) {
      let newWord = newWords[i];
      for(j = 0; j < newWord.length + 1; j++) {
          permutations.push(newWord.slice(0, j) + word[0] + newWord.slice(j))
      }
  }
  return permutations;
}
console.log(anagram('four')) // returns ['to', 'ot']

// Animal Hierarchy
// input => array of objects
// input to recursive call => filtered array of objects , 

/* ==============================
Exercise 10: Animal Hierarchy
Step through the code and find the input to the program, input to each recursive calls, 
output of each recursive calls and the output of the program. The purpose of this 
exercise is not for you to copy paste the code and find out the output but rather 
step through each line, analyze each step to understand how recursion works.
*/

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}


/*=================================================================================*/
/*
Exercise 11: Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
*/

let organization = {
"Zuckerberg": {		
  "Schroepfer": {
    "Bosworth": {
      "Steve":{},
      "Kyle":{},
      "Andra":{}
    },
    "Zhao": {
      "Richie":{},
      "Sofia":{},
      "Jen":{}
    },
    "Badros": {
      "John":{},
      "Mike":{},
      "Pat":{}
    },
    "Parikh": {
      "Zach":{},
      "Ryan":{},
      "Tes":{}
    }
  },
  "Schrage": {
    "VanDyck": {
      "Sabrina":{},
      "Michelle":{},
      "Josh":{}
    },
    "Swain": {
      "Blanch":{},
      "Tom":{},
      "Joe":{}
    },
    "Frankovsky": {
      "Jasee":{},
      "Brian":{},
      "Margaret":{}
    }
  },
  "Sandberg": {
    "Goler": {
      "Eddie":{},
      "Julie":{},
      "Annie":{}
    },
    "Hernandez": {
      "Rowi":{},
      "Inga":{},
      "Morgan":{}
    },
    "Moissinac": {
      "Amy":{},
      "Chuck":{},
      "Vinni":{}
    },
    "Kelley": {
      "Eric":{},
      "Ana":{},
      "Wes":{}
    }
}}};

function traverseA(data, depth = 0) {
let indent = " ".repeat(depth * 4);
Object.keys(data).forEach(key => {
  console.log(indent + key);
  traverseA(data[key], depth + 1)
});
}

function traverseB(node, indent=0) {
for (var key in node) {
  console.log(" ".repeat(indent), key);
  traverseB(node[key], indent + 4);
}
}
