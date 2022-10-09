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
  let newStr = [];
  for ( let i = 0; i < text.length; i++ ) {
    if ( text[i] === ' ' ) {
      newStr.push( '20%' )
    } else {
      newStr.push( text[i] )
    }
  }
  return newStr.join( '' );
};

console.log( urlEncode( "Lighthouse Labs" ) );
console.log( urlEncode( " Lighthouse Labs " ) );
console.log( urlEncode( "blue is greener than purple for sure" ) );






const whereCanIPark = function ( spots, vehicle ) {
  // Code here!
  let parking = [];
  if ( vehicle === 'regular' ) {
    for ( let i = 0; i < spots.length; i++ ) {
      for ( let j = 0; j < spots[i].length; j++ ) {
        if ( spots[i][j] === 'R' ) {
          parking.push( j, i )
          return parking
        }
      }
    }

  } else if ( vehicle === 'small' ) {
    for ( let i = 0; i < spots.length; i++ ) {
      for ( let j = 0; j < spots[i].length; j++ ) {
        if ( spots[i][j] === 'R' || spots[i][j] === 'S' ) {
          parking.push( j, i )
          return parking
        }
      }
    }
  } else if ( vehicle === 'motorcycle' ) {
    for ( let i = 0; i < spots.length; i++ ) {
      for ( let j = 0; j < spots[i].length; j++ ) {
        if ( spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M' ) {
          parking.push( j, i )
          return parking
        }
      }
    }
  }
  if ( parking.length === 0 ) {
    return false
  }
};

console.log( whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
) );

console.log( whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
) );

console.log( whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
) )







const checkAir = function ( samples, threshold ) {
  // Code here!
  let pollutedCount = 0
  for ( let i = 0; i < samples.length; i++ ) {
    if ( samples[i] === 'dirty' ) {
      pollutedCount += 1;
    }
  }
  let qualertyAir = pollutedCount / samples.length;
  return qualertyAir > threshold ? 'Polluted' : 'Clean';
};

console.log( checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
) );

console.log( checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
) );

console.log( checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
) )







const repeatNumbers = function ( data ) {
  // Put your solution here
  let newArr = []
  for ( let i = 0; i < data.length; i++ ) {
    let tempArr = [];
    for ( let j = 0; j < data[i][1]; j++ ) {
      tempArr.push( data[i][0] )
    }
    newArr.push( parseInt( tempArr.join( '' ) ) );
  }

  return newArr.join( ', ' )

};

console.log( repeatNumbers( [[1, 10]] ) );
console.log( repeatNumbers( [[1, 2], [2, 3]] ) );
console.log( repeatNumbers( [[10, 4], [34, 6], [92, 2]] ) );









const camelCase = function ( input ) {
  // Your code here
  const newArr = input.split( ' ' );
  let returnedArr = [];
  for ( let i = 1; i < newArr.length; i++ ) {
    const tempArr = [...newArr[i]]
    tempArr[0] = tempArr[0].toUpperCase();
    const tempStr = tempArr.join( '' );
    returnedArr.push( tempStr );
  }
  return newArr[0] + returnedArr.join( '' );
};

console.log( camelCase( "this is a string" ) );
console.log( camelCase( "loopy lighthouse" ) );
console.log( camelCase( "supercalifragalisticexpialidocious" ) );











const multiplicationTable = function ( maxValue ) {
  // Your code here
  let temp = 0;
  let returnedArr = []
  for ( let i = 1; i <= maxValue; i++ ) {
    let tempArr = [];
    temp += 1;
    for ( let j = temp; j <= temp * maxValue; j += temp ) {
      tempArr.push( j );
    }
    returnedArr.push( tempArr )
  }
  return returnedArr
};

console.log( multiplicationTable( 1 ) );
console.log( multiplicationTable( 5 ) );
console.log( multiplicationTable( 10 ) );








// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function ( radius ) {
  // Code here!
  return PI * Math.pow( radius, 3 ) * 4 / 3
}
console.log( 4186 < sphereVolume( 10 ) && sphereVolume( 10 ) < 4189 );

const coneVolume = function ( radius, height ) {
  // And here!
  return PI * Math.pow( radius, 2 ) * height / 3
}
console.log( 45 < coneVolume( 3, 5 ) && coneVolume( 3, 5 ) < 49 );

const prismVolume = function ( height, width, depth ) {
  // Probably here too!
  return height * width * depth

}

console.log( prismVolume( 3, 4, 5 ) === 60 );

const totalVolume = function ( solids ) {
  // Code here? Yup!
  let loopedVolume = [];
  for ( let i = 0; i < solids.length; i++ ) {
    if ( solids[i].type === 'sphere' ) {
      loopedVolume.push( sphereVolume( solids[i].radius ) )
    } else if ( solids[i].type === 'cone' ) {
      loopedVolume.push( coneVolume( solids[i].radius, solids[i].height ) )
    }
    else if ( solids[i].type === 'prism' ) {
      loopedVolume.push( prismVolume( solids[i].height, solids[i].width, solids[i].depth ) )
    }
  }
  return loopedVolume.reduce( ( acc, value ) => acc + value, 0 )
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log( 272000 < totalVolume( duck ) && totalVolume( duck ) < 275000 );

















const chooseRecipe = function ( bakeryA, bakeryB, recipes ) {
  // Code here!
  for ( let i = 0; i < recipes.length; i++ ) {
    let ingredientA = recipes[i].ingredients[0]
    let ingredientB = recipes[i].ingredients[1]
    for ( let j = 0; j < bakeryA.length; j++ ) {
      if ( bakeryA[j] === ingredientA ) {
        for ( let h = 0; h < bakeryB.length; h++ ) {
          if ( bakeryB[h] === ingredientB ) {
            return recipes[i].name;
          }
        }
      }
    }
    for ( let j = 0; j < bakeryA.length; j++ ) {
      if ( bakeryA[j] === ingredientB ) {
        for ( let h = 0; h < bakeryB.length; h++ ) {
          if ( bakeryB[h] === ingredientA ) {
            return recipes[i].name;
          }
        }
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log( chooseRecipe( bakeryA, bakeryB, recipes ) );

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log( chooseRecipe( bakeryA, bakeryB, recipes ) );












const talkingCalendar = function ( date ) {
  // Your code here
  const inputData = date.split( '/' )
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  inputData[1] = months[inputData[1] - 1];
  const tempArr = inputData[2].split( '' );
  if ( tempArr[1] === '1' ) {
    tempArr[1] = '1st';
  } else if ( tempArr[1] === '2' ) {
    tempArr[1] = '2nd';
  } else if ( tempArr[1] === '3' ) {
    tempArr[1] = '3rd'
  } else {
    tempArr[1] += 'th'
  }
  if ( tempArr[0] === '0' ) {
    inputData[2] = tempArr[1]
  } else {
    inputData[2] = tempArr[0] + tempArr[1]
  }
  return `${ inputData[1] } ${ inputData[2] }, ${ inputData[0] }`
};

console.log( talkingCalendar( "2017/12/02" ) );
console.log( talkingCalendar( "2007/11/11" ) );
console.log( talkingCalendar( "1987/08/24" ) );









const calculateChange = function ( total, cash ) {
  // Your code here
  const tempArr = [];
  let dollarBills = {};
  const dollarsArr = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoDollars', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny']
  let tempDiff = cash - total;
  let twentyCash = Math.floor( tempDiff / 2000 );

  let tenCash = Math.floor( ( tempDiff - twentyCash * 2000 ) / 1000 );

  let fiveCash = Math.floor( ( tempDiff - tenCash * 1000 - twentyCash * 2000 ) / 500 );
  let twoCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 ) / 200 );
  let oneCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 - twoCash * 200 ) / 100 );
  let quarterCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 - twoCash * 200 - oneCash * 100 ) / 25 );
  let dimeCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 - twoCash * 200 - oneCash * 100 - quarterCash * 25 ) / 10 );
  let nickelCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 - twoCash * 200 - oneCash * 100 - quarterCash * 25 - dimeCash * 10 ) / 5 );
  let pennyCash = Math.floor( ( tempDiff - twentyCash * 2000 - tenCash * 1000 - fiveCash * 500 - twoCash * 200 - oneCash * 100 - quarterCash * 25 - dimeCash * 10 - nickelCash * 5 ) / 1 );
  tempArr.push( twentyCash, tenCash, fiveCash, twoCash, oneCash, quarterCash, dimeCash, nickelCash, pennyCash );
  for ( let i = 0; i < tempArr.length; i++ ) {
    if ( tempArr[i] !== 0 ) {
      dollarBills[dollarsArr[i]] = tempArr[i];
    }
  }
  return dollarBills
};

console.log( calculateChange( 1787, 2000 ) );
console.log( calculateChange( 2623, 4000 ) );
console.log( calculateChange( 501, 1000 ) );







var removeDuplicates = function ( nums ) {
  for ( let i = 0; i < nums.length - 1; i++ ) {
    for ( let j = i + 1; j < nums.length; j++ ) {
      if ( nums[i] === nums[j] ) {
        nums.splice( j, 1 );
        j--;
      }
    }
  }
  return nums
};

console.log( removeDuplicates( [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] ) )
console.log( removeDuplicates( [1, 1, 1, 2] ) )






const organizeInstructors = function ( instructors ) {
  // Put your solution here
  const organizedOjb = new Object();
  for ( let i = 0; i < instructors.length; i++ ) {

    if ( typeof ( organizedOjb[instructors[i].course] ) !== 'object' ) {
      organizedOjb[instructors[i].course] = [];
    }
    organizedOjb[instructors[i].course].push( instructors[i].name )


  }
  return organizedOjb
};

console.log( organizeInstructors( [
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
] ) );
console.log( organizeInstructors( [
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
] ) );













const makeCase = function ( input, cases ) {
  // Put your solution here
  let tempArr = [...input];
  if ( typeof ( cases ) === 'object' ) {
    for ( let i = 0; i < tempArr.length; i++ ) {
      for ( let j = 0; j < cases.length; j++ ) {
        if ( cases[j] === 'upper' ) {
          tempArr[i] = tempArr[i].toUpperCase();
        } else if ( cases[j] === 'lower' ) {
          tempArr[i] = tempArr[i].toLowerCase();
        }
        else if ( cases[j] === 'vowel' ) {
          if ( tempArr[i] === 'a' || tempArr[i] === 'e' || tempArr[i] === 'i' || tempArr[i] === 'o' || tempArr[i] === 'u' ) {
            tempArr[i] = tempArr[i].toUpperCase();
          }
        } else if ( cases[j] === 'consonant' ) {
          if ( tempArr[i] !== 'a' && tempArr[i] !== 'e' && tempArr[i] !== 'i' && tempArr[i] !== 'o' && tempArr[i] !== 'u' ) {
            tempArr[i] = tempArr[i].toUpperCase();
          }
        } else if ( cases[j] === 'title' ) {
          tempArr[0] = tempArr[0].toUpperCase();
          if ( tempArr[i] === ' ' ) {
            tempArr[i + 1] = tempArr[i + 1].toUpperCase();
          }
        }
        else if ( cases[j] === 'kebab' ) {
          if ( tempArr[i] === ' ' ) {
            tempArr.splice( i, 1, '-' )
          }
        }
        else if ( cases[j] === 'snake' ) {
          if ( tempArr[i] === ' ' ) {
            tempArr.splice( i, 1, '_' )
          }
        }
        else if ( cases[j] === 'pascal' ) {
          tempArr[0] = tempArr[0].toUpperCase();
          if ( tempArr[i] === ' ' ) {
            tempArr[i + 1] = tempArr[i + 1].toUpperCase();
            tempArr.splice( k, 1 );
            k--;
          }
        }
        else if ( cases[j] === 'camel' ) {
          if ( tempArr[i] === ' ' ) {
            tempArr[i + 1] = tempArr[i + 1].toUpperCase();
            tempArr.splice( i, 1 );
            i--;
          }
        }
      }
    }
  } else {
    for ( let k = 0; k < tempArr.length; k++ ) {
      if ( cases === 'upper' ) {
        tempArr[k] = tempArr[k].toUpperCase();
      } else if ( cases === 'lower' ) {
        tempArr[k] = tempArr[k].toLowerCase();
      }
      else if ( cases === 'vowel' ) {
        if ( tempArr[k] === 'a' || tempArr[k] === 'e' || tempArr[k] === 'i' || tempArr[k] === 'o' || tempArr[k] === 'u' ) {
          tempArr[k] = tempArr[k].toUpperCase();
        }
      } else if ( cases === 'consonant' ) {
        if ( tempArr[k] !== 'a' && tempArr[k] !== 'e' && tempArr[k] !== 'i' && tempArr[k] !== 'o' && tempArr[k] !== 'u' ) {
          tempArr[k] = tempArr[k].toUpperCase();
        }
      } else if ( cases === 'title' ) {
        tempArr[0] = tempArr[0].toUpperCase();
        if ( tempArr[k] === ' ' ) {
          tempArr[k + 1] = tempArr[k + 1].toUpperCase();
        }
      }
      else if ( cases === 'kebab' ) {
        if ( tempArr[k] === ' ' ) {
          tempArr.splice( k, 1, '-' )
        }
      }
      else if ( cases === 'snake' ) {
        if ( tempArr[k] === ' ' ) {
          tempArr.splice( k, 1, '_' )
        }
      }
      else if ( cases === 'pascal' ) {
        tempArr[0] = tempArr[0].toUpperCase();
        if ( tempArr[k] === ' ' ) {
          tempArr[k + 1] = tempArr[k + 1].toUpperCase();
          tempArr.splice( k, 1 );
          k--;
        }
      }
      else if ( cases === 'camel' ) {
        if ( tempArr[k] === ' ' ) {
          tempArr[k + 1] = tempArr[k + 1].toUpperCase();
          tempArr.splice( k, 1 );
          k--;
        }
      }
    }
  }
  return tempArr.join( '' );
}

console.log( makeCase( "this is a string", "camel" ) );
console.log( makeCase( "this is a string", "pascal" ) );
console.log( makeCase( "this is a string", "snake" ) );
console.log( makeCase( "this is a string", "kebab" ) );
console.log( makeCase( "this is a string", "title" ) );
console.log( makeCase( "this is a string", "vowel" ) );
console.log( makeCase( "this is a string", "consonant" ) );
console.log( makeCase( "this is a string", ["upper", "snake"] ) );













const urlDecode = function ( text ) {
  // Put your solution here
};

console.log( urlDecode( "duck=rubber" ) );
console.log( urlDecode( "bootcamp=Lighthouse%20Labs" ) );
console.log( urlDecode( "city=Vancouver&weather=lots%20of%20rain" ) );
console.log( urlDecode( "city=Vancouver&weather=lots%20of%20rain" ).weather );