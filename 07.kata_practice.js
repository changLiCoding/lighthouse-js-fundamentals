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