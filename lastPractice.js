function secondLargestNumber(number){
    let fristLargest= [0];
    let secondLargest= [0];
    for(let i=0; i<number.length; i++ ){
        let index = number[i];
        if(index > fristLargest){
            fristLargest = secondLargest;
            secondLargest = index;
        }
    }
    return fristLargest;
}
const numbers= [200, 400, 750, 500, 900, 1000];
// const result = secondLargestNumber(numbers);
// console.log(result);


let first = 'I am going to be';
let second = 'an awesome web developer'
// let sum = first + ' ' + second;
// console.log(sum);

let giveNumber = 119;
let dividedNumber = 5;
let totalSum = giveNumber % dividedNumber;
// console.log(totalSum);

/* 
প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
*/

// let alia = 95;
// let dalia = 66;
// let salia = 80;
// let malia = 59;
// let lilia = 77;
// let jalaiya = 90;

// if(alia >= 90){
//     console.log('Alia  Grad: A+');
// }
// else if(alia >=80 ){
//     console.log('Alia  Grad: A');
// }
// else if(alia >= 70){
//     console.log('Alia  Grad: B');
// }
// else if (alia >= 60){
//     console.log('Alia  Grad: C');
// }
// else if (alia >= 50){
//     console.log('Alia  Grad: D');
// }
// else{
//     console.log('Alia  Grad: f');
// }


// if(dalia >= 90){
//     console.log('Dalia Grad: A+');
// }
// else if(dalia >=80 ){
//     console.log('Dalia Grad: A');
// }
// else if(dalia >= 70){
//     console.log('Dalia Grad: B');
// }
// else if (dalia >= 60){
//     console.log('Dalia Grad: C');
// }
// else if (dalia >= 50){
//     console.log('Dalia Grad: D');
// }
// else{
//     console.log('Dalia Grad: f');
// }


// if(salia >= 90){
//     console.log('Salia Grad: A+');
// }
// else if(salia >=80 ){
//     console.log('Salia Grad: A');
// }
// else if(salia >= 70){
//     console.log('Salia Grad: B');
// }
// else if (salia >= 60){
//     console.log('Salia Grad: C');
// }
// else if (salia >= 50){
//     console.log('Salia Grad: D');
// }
// else{
//     console.log('Salia Grad: f');
// }

// if(malia >= 90){
//     console.log('Malia Grad: A+');
// }
// else if(malia >=80 ){
//     console.log('Malia Grad: A');
// }
// else if(malia >= 70){
//     console.log('Malia Grad: B');
// }
// else if (malia >= 60){
//     console.log('Malia Grad: C');
// }
// else if (malia >= 50){
//     console.log('Malia Grad: D');
// }
// else{
//     console.log('Malia Grad: f');
// }

// if(lilia >= 90){
//     console.log('Lilia Grad: A+');
// }
// else if(lilia >=80 ){
//     console.log('Lilia Grad: A');
// }
// else if(lilia >= 70){
//     console.log('Lilia Grad: B');
// }
// else if (lilia >= 60){
//     console.log('Lilia Grad: C');
// }
// else if (lilia >= 50){
//     console.log('Lilia Grad: D');
// }
// else{
//     console.log('Lilia Grad: f');
// }



// if(jalaiya >= 90){
//     console.log('Jalaiya Grad: A+');
// }
// else if(jalaiya >=80 ){
//     console.log('Jalaiya Grad: A');
// }
// else if(jalaiya >= 70){
//     console.log('Jalaiya Grad: B');
// }
// else if (jalaiya >= 60){
//     console.log('Jalaiya Grad: C');
// }
// else if (jalaiya >= 50){
//     console.log('Jalaiya Grad: D');
// }
// else{
//     console.log('Jalaiya Grad: tmi fall');
// }


// let single = 'red'

// if (single === 'grean'){
//     console.log('dor de re bhai');
// }
// else if(single === 'yellow'){
//     console.log('bhai aste ja');
// }
// else if (single === 'red'){
//     console.log('tham bhai r jais na samne moha bipod');
// }
// else{
//     console.log('ki ase jibone');
// }

// let fruits = ['apple', 'banana', 'orange'];

// let index = fruits.indexOf('banana')
// fruits[1] = 'Mango'
// fruits.pop()
// console.log(fruits);
// fruits.push('Watermelon')
// console.log(fruits);

// let firstNumber = 13;
// let secondNumber = 79;
// let thirdNumber = 45;

// if(firstNumber > secondNumber && firstNumber > thirdNumber){
//     console.log('first');
// }
// else if (secondNumber > firstNumber && secondNumber > thirdNumber){
//     console.log('second');
// }
// else if ( thirdNumber > firstNumber && thirdNumber > secondNumber){
//     console.log('three');
// }

// let firstNumber = 9;
// let secondNumber = 8;
// let thirdNumber = 9;

// if(firstNumber == secondNumber == thirdNumber){
//     console.log('noIsosceles');
// }
// else if (firstNumber == secondNumber ||firstNumber == thirdNumber){
//     console.log('Isosceles');
// }

// let fiveWork = [' ১) রাত ৮ টা বাজে মডিউল আনলক করো ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো ৩) ভিডিও দেখতে দেখতে নোটস নাও  ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো  ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ) সাপোর্ট সেশনে জয়েন করো '];

// for (let i = 0; i < fiveWork.length; i++){
//     console.log(fiveWork [i]);
// }

// for (let i = 412; i <= 556; i++){
//     console.log(i);
// }

function multiplication(){
    for ( i =1; i<=10; i++){
        console.log(5+ ' * ' +i+ ' = '+5*i);
    }
}

multiplication();







