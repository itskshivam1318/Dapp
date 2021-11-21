const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')
// console.log(web3)

const privateKey = '3c7e3348e71fbd198a2887e4767d73d17a7a241e7ec4357e729db50603f4ceb6'
const myAccount = web3.eth.accounts.wallet.add(privateKey);

// console.log(myAccount)

module.exports = {
    web3: web3,
    myAccount: myAccount
}