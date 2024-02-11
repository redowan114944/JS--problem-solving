
function calculatorMoney(ticketSale){
    if(ticketSale<0){
        return'Invalid Number';
    }
    const totalProfit=((120*ticketSale))-(500+(8*50));
    return totalProfit;
}




function checkName(name){
    if(typeof name!=='string') {
        return 'Invalid';
    }
    const lastLetter=name[name.length-1].toLowerCase();
    const checkingLetter=['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if(checkingLetter.includes(lastLetter)) {
        return 'Good Name';
    } 
    else{
        return 'Bad Name';
    }
}




function deleteInvalids(array){
    if(!Array.isArray(array)) {
        return 'It is not an array';
    }

    let resultArray=[];
    for(let i= 0; i < array.length; i++) {
        if(typeof array[i]==='number' && !isNaN(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}




function password(obj){

    if(typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.birthDate !== 'number' || typeof obj.siteName !== 'string' || obj.birthDate.toString().length !== 4) {
        return 'invalid';
    }

    const result = obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthDate;

    return result;
}





function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) && typeof livingCost !== 'number') {
        return 'Invalid Input';
    }
    let totalMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            totalMoney = totalMoney + arr[i] - arr[i] *0.2;
        } 
        else{
            totalMoney= totalMoney + arr[i];
        }
    }

    totalMoney = totalMoney - livingCost;
    if(totalMoney < 0) {
        return 'earn more';
    } 
    else{
        return totalMoney;
    }
}
