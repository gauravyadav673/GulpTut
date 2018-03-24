"use strict"
class x {
	constructor(number) {
		this.number = number;
    	this.square = number*number;
	}
	findPre(x){return this};
}
export default x;
console.log(process.argv)