function maxInArray(numbers){
    let largest = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        // const index = i;
        const element = numbers[i];
        if(element > largest){
            largest = element
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 400];
const tallest = maxInArray(heights);
console.log('tallest person is:', tallest);


















// function str(text){
//     for (let i = 0; i < text.length; i++){
//         const element = (text[i]);
//         console.log(element);
//     }
// }

// const myrevers = 'I am the profesional web develaper';
// const anyWay = str(myrevers);


