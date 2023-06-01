const nums = [1, 2, 3, 4, 5, 6, 8, 9, 10, 0,];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// //// Every ////
// // 1 //
// const greaterZero = (currentVal) => currentVal >= 0;
// console.log(nums.every(greaterZero) + " Every");
// // 2 //
// const shortEight = (currentCount) => currentCount.length < 8;
// console.log(panagram.every(shortEight) + " Every");
// //// Filter ////
// // 1 //
// const lessFour = (currentVal) => currentVal < 4;
// console.log(nums.filter(lessFour) + " Filter");
// // 2 //
// const evenLength = (currentCount) => currentCount.length % 2 === 0;
// console.log(panagram.filter(evenLength) + " Filter");
// //// Find ////
// // 1 // 
// const divFive = (currentVal) => currentVal % 5 === 0 ;
// console.log(nums.find(divFive) + " Find");
// // 2 //
// const longerFive = (currentCount) => currentCount.length > 5;
// console.log(panagram.find(longerFive) + " Find"); //undefined because doesn't exist
// //// Find Index ////
// // 1 //
// const  indexDivThree = (currentVal) => currentVal % 3 === 0;
// console.log(nums.findIndex(indexDivThree));
// // 2 //
// const lessThanTwo = (currentCount) => currentCount.length < 2;
// console.log(panagram.findIndex(lessThanTwo)); //-1 Because it is not found
// //// For Each ////
// // 1 //
// const multThree =[];
// nums.forEach((number)=>{
// multThree.push(number*3);
// })
// console.log(multThree);
// // 2 //
// const excited =[];
// panagram.forEach((word)=>{
// excited.push(word+"!");
// })
// console.log(excited);
// //// Map ////
// // 1 //
// const multipledHundred = nums.map(numbers => numbers*100);//Creates new array 
// console.log(multipledHundred);
// // 2 //
// const shouting = panagram.map(x => x.toUpperCase());
// console.log(shouting);
//// Some ////
// 1 //
console.log(nums.some((num)=>num % 7 === 0)); // Should return FALSE
// 2 //
const splitUp = panagram.map(words => words.split(''));
console.log(splitUp.some((element)=>element === "a")); // Should return TRUE
