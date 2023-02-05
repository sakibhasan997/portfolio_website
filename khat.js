function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

const totalWood = woodCalculator(0,0,1);
const totalWoods = woodCalculator(1,0,0);
const totalWoodss = woodCalculator(0,1,0);
console.log('total wood requirment:', totalWood);
console.log('total wood requirment:', totalWoods);
console.log('total wood requirment:', totalWoodss);



let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}

// console.log(sum);