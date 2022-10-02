const chorus = "Let's dance!";
let repeat = 0;
while ( repeat < 10 ) {
  if ( repeat === 5 ) {
    console.log( "*change key*" );
  }
  console.log( chorus );
  repeat++;
}
console.log( "Until the sun comes up!" );


for ( let repeat = 0; repeat < 10; repeat++ ) {
  console.log( chorus );
}
console.log( "Until the sun comes up!" );


let x = 100;

while (/* your stop condition goes here */x <= 200 ) {
  // check divisibility
  // print Julia, James, or JuliaJames
  // increment x
  if ( x % 3 === 0 & x % 4 === 0 ) {
    console.log( 'LoopyLighthouse' );
    x++;
    continue;
  } else if ( x % 3 === 0 ) {
    console.log( 'Loopy' );
    x++;
    continue;
  } else if ( x % 4 === 0 ) {
    console.log( 'Lighthouse' );
    x++;
    continue;
  } else {
    console.log( x );
  }
  x++;
}



var arr = [];
for ( var i = 1; i <= 12; i++ ) {
  arr.push( i );
}

const solution = arr.reduce( ( acc, item ) => {
  acc = acc * item;
  return acc
}, 1 )

console.log( solution )