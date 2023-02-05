// function positive (number){
//     let numbers =[];
//     for(let i = 0; i < number.length; i++){
//         if(number[i] < 0){
//             break
//         }
//         else if (number[i] >= 0){
//             numbers.push(number[i])
//         }
//     }
//     return numbers
// }



// const myNumber = [3,4,7,6,5,-3,-1,8];
// const result = positive(myNumber);
// console.log(result);


function paperRequirements(firstbookquyantity, secondbookquyantity, thirdbookquyantity){
    const firstbook = 100;
    const secondbook = 200;
    const thirdbook = 300;

    const firstbookpz = firstbookquyantity * firstbook;
    const secondbookpz = secondbookquyantity * secondbook;
    const thirdbookpz = thirdbookquyantity * thirdbook;

    const totalbook = firstbookpz + secondbookpz + thirdbookpz;

    return totalbook;
}


let book = (0,0,3);
const totalbooks = paperRequirements(0,0,3);
console.log(totalbooks);



function sum (num1, num2, num3){
    const totalSum = num1*num2*num3;

    return totalSum;
}

// let addSum = 
const result = sum(10,200,30);
console.log(result);





let phone ={
    name: 'vivo',
    storage: 32,
    camera: 12,
}
    


phone.name = 'iphone';
console.log(phone);












