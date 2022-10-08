const sumLargestNumbers = function ( data ) {
  // Put your solution here
  for ( let i = 0; i < data.length; i++ ) {
    for ( let j = i + 1; j < data.length; j++ ) {
      if ( data[i] > data[j] ) {
        let temp;
        temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  return data[data.length - 1] + data[data.length - 2]
};

console.log( sumLargestNumbers( [1, 10] ) );
console.log( sumLargestNumbers( [1, 2, 3] ) );
console.log( sumLargestNumbers( [10, 4, 34, 6, 92, 2] ) );








const conditionalSum = function ( values, condition ) {
  // Your code here
  let newSum = 0;
  if ( condition === 'even' ) {
    for ( let i = 0; i < values.length; i++ ) {
      if ( values[i] % 2 === 0 ) {
        newSum = newSum + values[i];
      }
    }
  } else if ( condition === 'odd' ) {
    for ( let i = 0; i < values.length; i++ ) {
      if ( values[i] % 2 === 1 ) {
        newSum = newSum + values[i];
      }
    }
  }
  return newSum
};

console.log( conditionalSum( [1, 2, 3, 4, 5], "even" ) );
console.log( conditionalSum( [1, 2, 3, 4, 5], "odd" ) );
console.log( conditionalSum( [13, 88, 12, 44, 99], "even" ) );
console.log( conditionalSum( [], "odd" ) );








const numberOfVowels = function ( data ) {
  // Put your solution here
  let vowelNum = 0;
  for ( let i = 0; i < data.length; i++ ) {
    if ( data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u' ) {
      vowelNum += 1;
    }
  }
  return vowelNum;
};

console.log( numberOfVowels( "orange" ) );
console.log( numberOfVowels( "lighthouse labs" ) );
console.log( numberOfVowels( "aeiou" ) );













const instructorWithLongestName = function ( instructors ) {
  // Put your solution here
  let longestIndex = 0;
  for ( let i = 0; i < instructors.length; i++ ) {
    if ( instructors[longestIndex].name.length < instructors[i].name.length ) {
      longestIndex = i
    }
  }
  return instructors[longestIndex]
};

console.log( instructorWithLongestName( [
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
] ) );
console.log( instructorWithLongestName( [
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
] ) );







const urlEncode = function ( text ) {
  // Put your solution here
};

console.log( urlEncode( "Lighthouse Labs" ) );
console.log( urlEncode( " Lighthouse Labs " ) );
console.log( urlEncode( "blue is greener than purple for sure" ) );