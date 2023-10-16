export function manualStringReverser(string) {
  let reversed = [];
  for (let i = 0; i <= string.length; i++) {
    reversed.push(string[i]);
  }
  let str = reversed.reverse().join("");
  if (string.length > 40) {
   return `words cannot exceed 40characters. please try again!`
  }
  else {
   return `"${string}" reveresed is "${str}"`;
  }
}
// manualstringreverser
// console.log(manualStringReverser("Helloworld"));

export function letterCount(letter) {
  const letterlength = letter.length;
  if (letter.length > 60) {
   return `words cannot exceed 60characters. please try again!`
  }
  else {
  return `they are ${letterlength} letters in "${letter}"`;
  }
}
// lettercount
// console.log(letterCount("Helloworld"));

export function wordCount(word) {
  const wordarr = word.split(" ");
  const wordlength = wordarr.length;
   if (word.length > 60) {
   return `words cannot exceed 60characters. please try again!`
  }
  else {
  return `they are ${wordlength} words in "${word}"`;
  }
}
//wordcount
// console.log(wordCount("today is monday so you dont expect me to be sad"));

export function findOddEven(numbers) {
  let nums = {
    oddNumbers: [],
    evenNumbers: [],
  };
  for (let i = 0; i < numbers.length; i++) {
    const identifier = numbers[i];
    if (identifier % 2 === 0) {
      nums.evenNumbers.push(identifier);
    } else {
      nums.oddNumbers.push(identifier);
    }
  }

  function checklen(numbers) {
    if (numbers.length > 1) {
      return ["are", "s"];
    } else {
      return ["is an", ""];
    }
  }
  if (nums.evenNumbers.length===1 && nums.oddNumbers.length===0) {
    return `${nums.evenNumbers[0]} is an even number`
  }else if (nums.oddNumbers.length===1 && nums.evenNumbers.length===0) {
    return `${nums.oddNumbers[0]} is an odd number`
  }else if (nums.oddNumbers.length === 0) {
    return `they are no oddNumbers in ${numbers.join(",")}`;
  } else if (nums.evenNumbers.length === 0) {
    return `they are no evenNumbers in ${numbers.join(",")}`;
  }
  return `in the given values, ${nums.evenNumbers.join(",")} ${
    checklen(nums.evenNumbers)[0]
  } evenNumber${checklen(nums.evenNumbers)[1]} and ${nums.oddNumbers.join(
    ","
  )} ${checklen(nums.oddNumbers)[0]} oddNumber${checklen(nums.oddNumbers)[1]}`;
}
// findOddEven
// console.log(
//   findOddEven([4, 2, 3, 5, 34, 7643, 33, 45, 234, 6, 78, 65, 344, 566])
// );


export function randomNumber(limit) {
  return `a random whole number from 0-${limit} is ${Math.floor(
    Math.random() * (limit + 1)
  )}`;
}
// randomNumber
// console.log(randomNumber(100000));
``;

export function passwordGenerator(difficulty) {
  const difficultynum = () =>
    difficulty === "easy"
      ? 9
      : difficulty === "moderate"
      ? 13
      : difficulty === "hard"
      ? 15
      : 9;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const signs = "!@$&>.,/+";
  const easymap = Array.from(letters.toUpperCase() + letters);
  const moderatemap = Array.from(letters.toUpperCase() + letters + numbers);
  const hardmap = Array.from(letters.toUpperCase() + letters + numbers + signs);

  const difficultyname = () =>
    difficulty === "easy"
      ? easymap
      : difficulty === "moderate"
      ? moderatemap
      : difficulty === "hard"
      ? hardmap
      : 6;

  const passarr = [];

  for (let i = 0; i <= difficultynum(); i++) {
    const randnum = () =>
      Math.floor(Math.random() * (difficultyname().length + 1));
    passarr.push(difficultyname()[randnum()]);
  }

  return `your password is ${passarr.join("")}`;
}
// passwordGenerator
// console.log(passwordGenerator("hard"));

export function otpGenerator() {
  const numbers = Array.from("1234567890");
  const otparr = [];

  for (let i = 0; i <= 7; i++) {
    const randnum = () => Math.floor(Math.random() * (9 + 1));
    otparr.push(numbers[randnum()]);
  }
  return `your otp is ${otparr.join("")}`;
}
// otpGenerator
// console.log(otpGenerator());

export function idGenerator(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const map = Array.from(letters.toUpperCase() + letters + numbers);

  const idarr = [];

  for (let i = 0; i <= length - 1; i++) {
    const randnum = () => Math.floor(Math.random() * (map.length + 1));
    idarr.push(map[randnum()]);
  }

 if(Number(length) <= 40) {
   return `your id is ${idarr.join("").toString("hex")}`;
 }
 else {
  return `id cannot exceed 40characters. please try again!`
 }
}
// idGenerator
// console.log(idGenerator(70));

export function countUniqueValues(value) {
  const values = value.split("");
  let uniqueValues = [];

  for (let i = 0; i < values.length; i++) {
    const firstIndex = values.indexOf(values[i]);
    const lastIndex = values.lastIndexOf(values[i]);

    if (firstIndex !== lastIndex && !uniqueValues.includes(values[i])) {
      uniqueValues.push(values[i]);
    }
  }
  if (value.length > 60) {
    return `words cannot exceed 60characters. please try again!`
  }
  if (uniqueValues.length === 0) {
    return `they are no unique values in ${value}`;
  } else {
    return `the unique values in ${value} ${
      uniqueValues.length === 1 ? "is" : "are"
    } ${uniqueValues.join(",")}`;
  }
}
// countUniqueValues
// console.log(countUniqueValues("helloworld"));

export function sortNumbers(numbers) {
  numbers.sort((a, b) => a - b);

  let nums = [];
  let countMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    nums.push(num);
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }
  return nums.join(",");
}
// sortNumbers
// console.log(sortNumbers(39, 4, 30, 6, 60, 10, 5, 19, 93, 229, 29));


export function numFormatAlg(num = 1) {
  function sliceEnd(num) {
    if (num.toString().length <= 4) {
      return num.toString().slice(1, 2);
    } else if (num.toString().length <= 5) {
      return num.toString().slice(2, 3);
    } else if (num.toString().length <= 6) {
      return num.toString().slice(3, 4);
    } else if (num.toString().length <= 7) {
      return num.toString().slice(1, 2);
    } else if (num.toString().length <= 8) {
      return num.toString().slice(2, 3);
    }
  }
  function sliceStart(num) {
    if (num.toString().length <= 4) {
      return num.toString().slice(0, 1);
    } else if (num.toString().length <= 5) {
      return num.toString().slice(0, 2);
    } else if (num.toString().length <= 6) {
      return num.toString().slice(0, 3);
    } else if (num.toString().length <= 7) {
      return num.toString().slice(0, 1);
    } else if (num.toString().length <= 8) {
      return num.toString().slice(0, 2);
    }
  }
  function calculateT(num, rep) {
    const start = sliceStart(num);
    const end = sliceEnd(num);

    if (end === "0") {
      return `${start}${rep}`;
    } else {
      return `${start}.${end}${rep}`;
    }
  }

  if (num.toString().length <= 3) {
    return `${num}`;
    //
  } else if (num.toString().length <= 4) {
    return `${calculateT(num, "k")}`;
    //
  } else if (num.toString().length <= 5) {
    return `${calculateT(num, "k")}`;
    //
  } else if (num.toString().length <= 6) {
    return `${calculateT(num, "k")}`;
    //
  } else if (num.toString().length <= 7) {
    return `${calculateT(num, "m")}`;
    //
  } else if (num.toString().length <= 8) {
    return `${calculateT(num, "m")}`;
    //
  } else {
    return `number exceeded the max value`;
  }
}
// numFormatAlg
// console.log(numFormatAlg(22));