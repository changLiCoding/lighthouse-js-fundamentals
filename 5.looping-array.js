const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log( "Kitchen stuff to pack:" );
for ( let i = 0; i < packingList.length; i++ ) {
  console.log( packingList[i] );
}

console.log( "Kitchen stuff to pack:" );
let i = 0;
while ( i < packingList.length ) {
  console.log( packingList[i] );
  i++;
}


const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let a = 0;
while ( a < ingredients.length ) {
  console.log( ingredients[a] );
  a++;
}
// Write a for loop that prints out the contents of ingredients:
for ( let v = 0; v < ingredients.length; v++ ) {
  console.log( ingredients[v] );
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for ( let v = ingredients.length - 1; v >= 0; v-- ) {
  console.log( ingredients[v] );
}


const range = ( start, end, step ) => {
  let newArr = [];
  if ( step > 0 && end > start ) {
    for ( let i = 0; i <= Math.floor( ( end - start ) / step ); i++ ) {
      newArr.push( start + step * i )
    }
    return newArr
  }
  else return
}

console.log( range( 0, 10, 2 ) );
console.log( range( 10, 30, 5 ) );
console.log( range( -5, 2, 3 ) );

console.log( range( 0, 10, -2 ) );
console.log( range( 110, 10, 2 ) );
console.log( range( 0, 20 ) );


const lastIndexOf = ( arr, item ) => {
  let itemIndex = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === item ) {
      itemIndex.push( i );
    }
  }
  if ( itemIndex.length === 0 ) {
    return -1
  } else {
    return itemIndex[itemIndex.length - 1];
  }
}

console.log( lastIndexOf( [0, 1, 4, 1, 2], 1 ), "=?", 3 );
console.log( lastIndexOf( [0, 1, 4, 1, 2], 2 ), "=?", 4 );
console.log( lastIndexOf( [0, 1, 4, 1, 2], 3 ), "=?", -1 );
console.log( lastIndexOf( [5, 5, 5], 5 ), "=?", 2 );
console.log( lastIndexOf( [], 3 ), "=?", -1 );

const loopyLighthouse = ( [start, end], [mult1, mult2], [name1, name2] ) => {
  let newArr = []
  for ( let i = start; i <= end; i++ ) {
    if ( i % mult1 === 0 && i % mult2 === 0 ) {
      newArr.push( name1 + name2 )
    } else if ( i % mult1 === 0 && i % mult2 !== 0 ) {
      newArr.push( name1 );
    } else if ( i % mult1 !== 0 && i % mult2 === 0 ) {
      newArr.push( name2 );
    } else {
      newArr.push( i );
    }
  }

  for ( let i = 0; i < newArr.length; i++ ) {
    console.log( newArr[i] );
  }
}

loopyLighthouse( [15, 90], [2, 5], ["Batty", "Beacon"] );


const concat = ( arr1, arr2 ) => {
  let newArr = [];
  for ( let i = 0; i < arr1.length + arr2.length; i++ ) {
    if ( i < arr1.length ) {
      newArr.push( arr1[i] )
    } else if ( i >= arr1.length ) {
      newArr.push( arr2[i - arr1.length] )
    }
  }
  return newArr
}

console.log( concat( [1, 2, 3], [4, 5, 6] ), "=?", [1, 2, 3, 4, 5, 6] );
console.log( concat( [0, 3, 1], [9, 7, 2] ), "=?", [0, 3, 1, 9, 7, 2] );
console.log( concat( [], [9, 7, 2] ), "=?", [9, 7, 2] );
console.log( concat( [5, 10], [] ), "=?", [5, 10] );


const merge = ( arr1, arr2 ) => {
  let newArr = [];
  for ( let i = 0; i < arr1.length + arr2.length; i++ ) {
    if ( i < arr1.length ) {
      newArr.push( arr1[i] )
    } else if ( i >= arr1.length ) {
      newArr.push( arr2[i - arr1.length] )
    }
  }
  return newArr.sort( ( x, y ) => x - y );
}

console.log( merge( [4, 5, 6], [1, 2, 3, 4] ), "=?", [1, 2, 3, 4, 4, 5, 6] );
console.log( merge( [4], [2, 5, 8] ), "=?", [2, 4, 5, 8] );
console.log( merge( [1, 2, 6], [] ), "=?", [1, 2, 6] );


const mergeArr = [4, 5, 6, 1, 2, 3, 4];

function arr_sort ( data ) {
  var temp
  for ( var i = 0; i < data.length - 1; i++ ) {
    for ( var j = 0; j < data.length - i; j++ ) {
      if ( data[j] > data[j + 1] ) {
        temp = data[j + 1]
        data[j] = data[j + 1]
        data[j + 1] = temp
      }
    }
  }
}

[1, 5, 6, 4, 2, 3, 4]
[1, 4, 6, 5, 2, 3, 4]
[1, 2, 6, 5, 4, 3, 4]
[1, 2, 5, 6, 4, 3, 4]