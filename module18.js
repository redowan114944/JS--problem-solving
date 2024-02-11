// Problem - 1
function calculatorMoney(ticketSale){
    if (ticketSale<0){
        return 'invalid number!';
    }
    const result= ((120*ticketSale))-(500+(8*50));
    return result;
}
console.log(calculatorMoney(10))


// Problem - 2
function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const lastLetter = name[name.length - 1].toLowerCase();
    const acceptedLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (acceptedLetters.includes(lastLetter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

let name = 'RAFE';
let result = checkName(name);

console.log(result); 


// Problem - 3
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "It's not an array";
    }

    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

const inputArray = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const resultArray = deleteInvalids(inputArray);
console.log(resultArray);


// Problem - 4
function password(obj) {
    if(typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.birthDate !== 'number' || typeof obj.siteName !== 'string' || obj.birthDate.toString().length !== 4) {
        return 'invalid';
    }

    const result = obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthDate;


    return result;
}

console.log(password({ name: "toky", birthDate: 2003, siteName: "Facebook" }));


// Problem - 5
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) && typeof livingCost !== 'number') {
        return "Invalid Input";
    }

    let totalIncome = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            totalIncome += arr[i] - arr[i] * 0.2;
        } 
        else {
            totalIncome += arr[i];
        }
    }

    totalIncome -= livingCost;

    if (totalIncome < 0) {
        return "earn more";
    } 
    else {
        return totalIncome;
    }
}

console.log(monthlySavings ([ 900 , 2700 , 3400], 2000));
