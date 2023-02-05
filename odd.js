let yourName = 'sakib';
yourName = 'hasan';

// console.log(yourName);

function milesTo(miles) {
    const kilometer = miles*1.609;
    return kilometer;
}

var ml =milesTo(12);
// console.log(ml);

function jaKir(mia){
    let result = 1;
    for (let i = 1; i <= mia; i++){
        // console.log(mia[i]);
        result = result + i
    }
    return result
}

// jaKir(10);
const result = jaKir(9);
// console.log(result);


function rani(number){
    for (let i = 0; i < number.length; i++){
        const index = i;
        console.log(index);
    }
}

var myNumbers = [1,2,3,4,5,6,7,8,9];
rani(myNumbers);


