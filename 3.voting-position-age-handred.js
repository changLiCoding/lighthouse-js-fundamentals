const chooseStations = function ( stations ) {
  let goodStations = [];
  for ( const station of stations ) {
    if ( station[1] >= 20 && ( station[2] === 'school' || station[2] === 'community centre' ) ) {
      goodStations.push( station[0] );
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log( chooseStations( stations ) );

const finalPosition = ( arr ) => {
  let newPosition = [0, 0];
  for ( const move of arr ) {
    switch ( move ) {
      case 'north':
        newPosition[1]++;
        break;
      case 'south':
        newPosition[1]--;
        break;
      case 'east':
        newPosition[0]++;
        break;
      case 'west':
        newPosition[0]--;
        break
      default:
        break;
    }
  }
  return newPosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log( finalPosition( moves ) );

const ageCalculator = ( name, birth, current ) => {
  return ( `${ name } is ${ current - birth } years old.` )
}

console.log( ageCalculator( "Miranda", 1983, 2015 ) );
console.log( ageCalculator( "Ferdinand", 1988, 2015 ) );

const howManyHundreds = ( num ) => {
  const hundreds = num / 100;
  return Math.floor( hundreds );
}

console.log( howManyHundreds( 1000 ), "=?", 10 );
console.log( howManyHundreds( 894 ), "=?", 8 );
console.log( howManyHundreds( 520 ), "=?", 5 );
console.log( howManyHundreds( 99 ), "=?", 0 );
console.log( howManyHundreds( 0 ), "=?", 0 );

const calculateRectangleArea = ( length, height ) => {
  if ( length >= 0 && height >= 0 ) {
    return length * height
  } else return
}
const calculateTriangleArea = ( base, height ) => {
  if ( base >= 0 && height >= 0 ) {
    return base * height / 2
  } else return

}
const calculateCircleArea = ( radius ) => {
  if ( radius >= 0 ) {
    return radius * radius * 3.1415926

  } else return
}

console.log( calculateRectangleArea( 10, 5 ) );     // should print 50
console.log( calculateRectangleArea( 1.5, 2.5 ) );  // should print 3.75
console.log( calculateRectangleArea( 10, -5 ) );    // should print undefined

console.log( calculateTriangleArea( 10, 5 ) ); // should print 25
console.log( calculateTriangleArea( 3, 2.5 ) ); // should print 3.75
console.log( calculateTriangleArea( 10, -5 ) ); // should print undefined

console.log( calculateCircleArea( 10 ) ); // should print 314.159...
console.log( calculateCircleArea( 3.5 ) ); // should print 38.484...
console.log( calculateCircleArea( -1 ) ); // should print undefined