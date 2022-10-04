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