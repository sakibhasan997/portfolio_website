// var human = {
//     name: 'Sakib Hasan',
//     age : 20,
//     friend : ['Masud', 'Tasel', 'Sohel', 'shamim'],
//     country : 'Bangladesh',
// };

// console.log(human.friend[1]);

// for (let i = 0; i < 400; i++){
//     console.log('I am so sorry baby');
// }

// console.log(element)



function sum(num1, num2){
    let result = num1 + num2;
    return result;

}


let totalSum =sum(1232, 200);
let totalSam =sum(1232, 700);
// console.log(totalSum, totalSam);



function writSorry (name) {
    for (let i = 0; i < 10; i++){
        console.log('I am so sorry jannnu ' +  name);
    }
}

// writSorry('Sakib');


function kmMiles(km){
     const kmResult = km * 0.62;
     return kmResult;
}

let miles = kmMiles(12);
// console.log(miles);



function workOut(workoutName){
    let biceplWorkout = ['cable cros', 'bicap', 'bicap'];
    let chestWorkOut = ['chest fly', 'chest press', 'chest'];

    if(workoutName == 'chest'){
        return chestWorkOut;
    }
    else if ( workoutName == 'bicap'){
        return biceplWorkout;
    }
    else{
        return 'dont know'
    }
}

let workoutPlan = workOut('bicap');
// console.log(workoutPlan);



let musice = 'Ami pari ni tmake amr kore rakhte ami pari ni tmake apon kore rakhte. tmi bojoni ami boli ni tmi sopnote kno aso ni amr oviman tmake ghire so geyesi';

console.log(musice.includes('bojoni'));

if(musice.indexOf('sopnote') !== -1 ){
    console.log('tmai niye dekha sopno ami akhono dakhi tmi bissas koro tmi amr jonno akhno onek importaint');
} else{
    console.log('tamai vlobashi thik kintu tami akhn r ami chai na');
}

