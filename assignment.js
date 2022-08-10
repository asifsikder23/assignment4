// problem 1

function radianToDegree(radian){
    
    if (typeof (radian) != 'number'){
        return "Please, Enter a valid Number!!!";
    }
    else{
        const degree = radian * (180 / Math.PI);
        const result = degree.toFixed(2);
        return parseFloat(result);
    }
}
const isRadianToDegree = radianToDegree(10);
console.log(isRadianToDegree);


// problem 2

function isJavaScriptFile(string){
    if (typeof (string) === 'number' || typeof (string) === 'boolean'){
        return "Please, Enter a valid String!!!";
    }
    else if(string.endsWith('.js')){
        return true;
    }
    return false;
}
const fileName = 'index.js';
const findFile = isJavaScriptFile(fileName);
console.log(findFile);


// problem 3

function oilPrice(quantity1, quantity2, quantity3){
    if (typeof (quantity1) != 'number' && typeof (quantity2) != 'number' && typeof (quantity3) != 'number'){
        return "Please, Enter a valid number!!!";
    }
    else{
        const dieselRate = 114;
        const petrolRate = 130;
        const octenRate = 135;
        const dieselPrice = dieselRate * quantity1;
        const petrolPrice = petrolRate * quantity2;
        const octenPrice = octenRate * quantity3;
        const totalCost = dieselPrice + petrolPrice + octenPrice;
        return totalCost;
    }
}
const totalCost = oilPrice(1,0,2);
console.log(totalCost);



// problem 4
function publicBusFare(people){
    if (typeof (people) != 'number'){
        return "Please, Enter a valid Number!!!";
    }
    else{
        let busCapacity = 50;
        let microCapacity = 11;
        const remained = people % busCapacity;
        const rest = remained % microCapacity;
        fare = rest * 250;
        return fare;
    }
}
const totalPeople = 10;
const busFare = publicBusFare(totalPeople);
console.log(busFare);


// problem 5

const friend1 = {
    Name: "abul",
    friend: "babul"
  };
const friend2 = {
    Name: "babul",
    friend: "abul"
  };
function find(friend1, friend2){
    if (typeof (friend1) === 'object' && typeof (friend2) === 'object'){
        if(friend1.Name === friend2.friend && friend1.friend === friend2.Name){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "Please, Enter a valid Object!!!";
    }
}
const isFriend = find(friend1, friend2);
console.log(isFriend);