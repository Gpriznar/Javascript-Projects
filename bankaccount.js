function BankAccount(firstname,middlename,lastname,accounttype,status){
this.firstname = firstname
this.middlename = middlename
this.lastname = lastname
this.accounttype = accounttype
this.balance = 0
this.status = status
}

// Functions

BankAccount.prototype.openaccount = function(){
  if (account1.balance > 100)
  console.log("Creating new account...")
  else if (account1.balance < 100)
  console.log('***Insufficent funds to open a new account***')

}

BankAccount.prototype.availablefunds = function(){
  console.log("Funds available in Checking: ")
  console.log(checkingbalance)
  console.log("Funds available in Savings:")
  console.log(savingsbalance)
}

BankAccount.prototype.transferfunds = function(){
  console.log("Funds available in Checking: ")
  console.log(updatedcheckingbalance)
  console.log("Funds available in Savings: ")
  console.log(updatedsavingsbalance)
}

BankAccount.prototype.withdrawfunds = function(){
  console.log("Funds available in Checking: ")
  console.log(withdrawlcheckingbalance)
  console.log("Funds available in Savings:")
  console.log(updatedcheckingbalance)
}

BankAccount.prototype.fee = function() {
  console.log("Funds available in Checking: ")
  console.log(feebalance)
  console.log("Funds available in Savings:")
  console.log(updatedcheckingbalance)
}

let account1 = new BankAccount()

account1.firstname = "Gregory"
account1.middlename = "Martin"
account1.lastname = "Priznar"
account1.accounttype = "Checking"
account1.balance = 500
account1.status = "Open"

let account2 = new BankAccount()
account2.firstname = "Gregory"
account2.middlename = "Martin"
account2.lastname = "Priznar"
account2.accounttype = "Savings"
account2.balance = 0
account2.status = "Open"

let checkingbalance = account1.balance
let savingsbalance = account2.balance
let updatedcheckingbalance = account1.balance - 300
let updatedsavingsbalance = account2.balance + 300
let withdrawlcheckingbalance = updatedcheckingbalance - 250
let feebalance = withdrawlcheckingbalance -35

// Script
console.log("Welcome to First Savings Bank", account1)
console.log("We understand that you'd like to open a Savings Account")
console.log("Savings Account require a minimum of $100 deposit")
console.log("Let's see if you quailify")
account1.openaccount()
console.log("Congratulations on opening your savings account!", account2)
account2.availablefunds()
console.log("You have selected to transfer $300 into your savings account")
console.log("Transfering funds....")
account2.transferfunds()
console.log("You have selected to withdraw $250 from your checking account")
console.log("** WARNING CHECKING ACCOUNT WILL HAVE A -$50 BALANCE **")
console.log("*** ADDITIONAL FEES COULD BE ADDED FOR NEGATIVE BALANCES ***")
account1.withdrawfunds()
console.log("** DUE TO -$50 BALANCE IN YOUR CHECKING ACCOUNT **")
console.log("*** ADDITIONAL $35 FEE HAS BEEN ADDED ***")
account1.fee()
