// var myRegex = /college/;
// var myString = 'austin college';
// var result = myRegex.exec(myString);
// console.log(result);

// var myRegex = /college/;
// var myString = 'austin college';
// var result = myRegex.test(myString);
// console.log(result);

// var myRegex = /[a-z]/i;
// var keyboardTest = 'The quick brown fox jumps over the lazy dog!';
// var result2 = myRegex.test(keyboardTest);
// console.log(result2);
//task 1 modify

//myRegex=/a-z/

// myRegex = /acc/gi
// myString = 'AustinACC.eduacc'
// while( (result = myRegex.exec(myString)) !== null)
// (console.log(`Found at ${result[0]} at ${result.index}`))

// myRegenx=/Ste..en/
// myString = 'Steven King'
// result = myRegenx.exec(myString)
// console.log(result)

myRegex =/The quick brown fox jumps over the lazy dog!/
myString = 'The quick brown fox jumps over the lazy dog!'
while( (result = myRegex.exec(myString)) == null)
(console.log(`Found at ${result[0]} at ${result.index}`))
console.log(result)

