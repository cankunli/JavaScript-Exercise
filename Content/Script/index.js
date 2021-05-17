console.log("JavaScript Exercise")

//1.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}
console.log(sum);

//2.
let menu = {
	title: "My menu",
	width: 200,
	height: 300,
};
console.log(menu)
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);
console.log(menu)

//3.
function checkEmailId(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

console.log(checkEmailId('anystring@anystring.anystring'));
console.log(checkEmailId('anystringanystring.anystring')); // no @
console.log(checkEmailId('anystring.anystringany@string')); // . before @

//4.
function truncate(str, maxlength) {
	return (str.length > maxlength) ?
		str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)) //= "What I'd like to te…"

console.log(truncate("Hi everyone!", 20)) //= "Hi everyone!"

//5.
let people = ["James", "Brennie"];
people.push("Robert");
console.log(people);
people[Math.floor((people.length - 1) / 2)] = "Calvin";
console.log(people);
people.shift();
console.log(people);
people.unshift("Rose", "Regal");
console.log(people);

//6.



//7.
function validateEmail(email) {
	var re = /^[a-z]{1,6}_?\d{0,4}@.*\.[a-z]{2,}$/;
	if (/@hackerrank.com\s*$/.test(email)) {
		return re.test(email);
	}
	return false;
}

console.log(validateEmail('julia@hackerrank.com'));
console.log(validateEmail('julia_@hackerrank.com')); 
console.log(validateEmail('julia_0@hackerrank.com')); 
console.log(validateEmail('julia0_@hackerrank.com')); 
console.log(validateEmail('julia@gmail.com')); 
