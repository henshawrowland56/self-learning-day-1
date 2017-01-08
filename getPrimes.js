function getPrimes(n) {
	function isPrime(n) {
		if (n ===2) {return true}
		else if(n <= 1 || n % 2 === 0){
			return false
		}
		for(var i = 3; i <= Math.sqrt(n); i++){
			if(n % i === 0){
				return false;
			}
		}
		return true;
	}
	var result = [];
	for(var i = 0; i<=n; i++){
		if(isPrime(i)){
			result.push(i);
		}
	}
	return result;
}
module.exports = getPrimes;