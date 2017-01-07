//BASE ACCOUNT USED FOR CREATING ACCOUNT TYPE OBJECTS 
var Account = function(name,acNo,age,balance) {
	//ALL ACCOUNT USERS MUST BE ABOVE 18 YEARS OLD
	if (age < 18) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be Above 18 years old!";
	}else{
		//ACCOUNT OBJECT PROPERTIES
		this.Name = name;
		this.AcNo = acNo;
		this.Age = age;
		if(balance){
			this.Balance = balance;
		}
		else{
			this.Balance = 0;
		}
	}
}
//DEPOSIT FUNCTION CHAINED TO THE SUPER ACCOUNT CLASS FOR MAKING ACCOUNT DEPOSITS
Account.prototype.deposit = function(amount) {
	 if (amount > 0 && this.Balance) {
	 	this.Balance += amount;
	 	console.log("NEW ACCOUNT BALANCE IS " + this.Balance);
	 }else if(!this.Balance){
	 	console.log("NONEXISTENT ACCOUNT!");
	 }
	 else{
	 	console.log("INVALID DEPOSIT AMOUNT \nACCOUNT BALANCE IS " + this.Balance);
	 }
}
//WITHDRAW FUNCTION CHAINED TO THE SUPER ACCOUNT CLASS FOR MAKING ACCOUNT WITHDRAWALS
Account.prototype.withdraw = function(amount){
	if(this.Balance > amount && amount > 0){
		this.Balance -= amount;
		console.log("NEW ACCOUNT BALANCE IS " + this.Balance);
	}else if (!this.Balance) {
		console.log("INVALID ACCOUNT!");
	}
	else if (this.Balance < amount){
		console.log("Insufficient Balance! Can not Withdraw");
	}
}
//SHOWINFO FUNCTION FOR DISPLAYING ACCOUNT USER INFORMATION
Account.prototype.showInfo = function() {
	var user = {
		'name': this.Name,
		'age' : this.Age,
		'acNo' : this.AcNo,
		'balance': this.Balance,
		'accountType': this.constructor === Savings ? "SAVINGS" : "CURRENT"
	}
	console.log(user);
}
// A SAVINGS ACCOUNT OBJECT
function Savings(name,acNo,age,balance) {
	if (age < 18 && balance < 1000 ) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be Above 18 years old!
		\nMinimum Account opening fee is 1000";
	}
	else{
		this.Name = name;
		this.AcNo = acNo;
		this.Age = age;
		this.Balance = balance;
		var minBal = 1000;
		if(this.Balance === minBal){
			//CAN NOT WITHDRAW BELOW MINIMUM BALANCE;
			this.Balance -= minBal;
		}
	}
}
//MADE THE SAVINGS ACCOUNT OBJECT TO INHERIT THE ACCOUNT CLASS, i.e BE A TYPE OF ACCOUNT
Savings.prototype = new Account();
//MODIFYING THE SAVINGS ACCOUNT CONSTRUCTOR. SAVINGS ACCOUNT OBJECTS WILL BE CREATED USING
//THE SAVINGS CONSTRUCTOR i.e Savings();
Savings.prototype.constructor = Savings;

function Current(name,acNo,age,balance) {
	if (age < 18 && balance < 9000) {
		return "INVALID ACCOUNT CREATED \nAccount User Must be Above 18 years old!\nMinimun Account Opening fee is 9000";
	}
	else{
		this.Name = name;
		this.AcNo = acNo;
		this.Age = age;
		this.Balance = balance;
		var minBal = 9000;
		if(this.Balance === minBal){
			//CAN NOT WITHDRAW BELOW MINIMUM BALANCE;
			this.Balance -= minBal;
		}
	}
}
//MADE THE CURRENT ACCOUNT OBJECT TO INHERIT THE ACCOUNT CLASS, i.e BE A TYPE OF ACCOUNT
Current.prototype = new Account();
//MODIFYING THE CURRENT ACCOUNT CONSTRUCTOR. CURRENT ACCOUNT OBJECTS WILL BE CREATED USING
//THE CURRENT CONSTRUCTOR i.e Current();
Current.prototype.constructor = Current;