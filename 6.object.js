const { list } = require( "cowsay" );


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney ( amount ) {
    if ( amount > 0 ) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney ( amount ) {
    var verifyBalance = savingsAccount.balance - amount;
    if ( amount > 0 && verifyBalance >= 0 ) {
      savingsAccount.balance -= amount;
    }
  },
  // your code goes here
  printAccountSummary: () => {
    return `Welcome!\nYour balance is currently $1000 and your interest rate is 1%.`
  }
}

console.log( savingsAccount.printAccountSummary() );


const facebookProfile = {
  name: 'Chang Li',
  fridends: 20,
  messages: [],
  postMessage: function ( mesg ) {
    this.messages.push( mesg );
  },
  removeMessage: function ( index ) {
    this.messages.splice( index, 1 );
  },
  addFriend: function () {
    this.fridends = this.fridends + 1;
  },
  removeFriend: function () {
    this.fridends = this.fridends - 1;
  }
}

facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'the one to delete' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );
facebookProfile.postMessage( 'first facebook' );


facebookProfile.addFriend();

console.log( facebookProfile.fridends );
console.log( facebookProfile.messages );

facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();

facebookProfile.removeMessage( 4 );
console.log( facebookProfile.messages );

console.log( facebookProfile.fridends );


var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach( ( donuts ) => {
  console.log( `${ donuts.type } donuts cost $${ donuts.cost } each` )
} )


let bins = {
  waste: 4, recycling: 2, compost: 5
}

const smartGarbage = ( key, obj ) => {
  console.log( obj[key] );
  if ( typeof ( obj[key] ) !== 'number' ) {
    obj[key] = 1;
  } else {
    obj[key] = obj[key] + 1;
  }
  console.log( typeof ( obj[key] ) )
  console.log( obj )
}

smartGarbage( 'recycling', bins );
smartGarbage( 'recycling', bins );
smartGarbage( 'drinking', bins );
smartGarbage( 'eatting', bins );
console.log( bins );




const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]


const speed = 38

const carPassing = ( cars, speed ) => {
  let tempArr = [...cars, { time: Date.now(), speed: speed }];
  return tempArr
}

const newArr = carPassing( cars, speed )

console.log( newArr );







const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function ( vegetables, metric ) {
  // Your code in here ...
  let bestIndex = 0;
  for ( let i = 0; i < vegetables.length; i++ ) {

    if ( vegetables[bestIndex][metric] < vegetables[i][metric] ) {
      bestIndex = i;
    }
  }

  return vegetables[bestIndex].submitter;
}

console.log( judgeVegetable( vegetables, metric ) )