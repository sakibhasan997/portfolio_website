const names = ['abul', 'babul', 'kabul', 'gabul', 'ebul', 'kabul','gabul','bkash', 'dada'];

function removeDuplicates(names){
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}


const typOfName = removeDuplicates(names);
console.log(typOfName);




