

// for(let num=0; num<5; num=num+2){
//     console.log(num)
// }

// for(let num=1; num<5; num=num+2){
//     console.log(num)
// }

// let sum=0;
// for(let i=1; i<=20; i++){
//     sum=sum+i;
//     // console.log(i);
// }
// console.log(sum)


// for(i=20; i>=0; i--){
//     console.log(i)
// }
// // console.log(i)

// for(i=0; i<=20; i++){
//     console.log(i)
// }


// for(let i=0; i<=20; i++){
//     if(i%5===0 || i%6===0){
//         console.log(i)
//     }
// }
// console.log('secondPart')

// for(let i=0; i<=50; i++){
//     if(i%5===0 && i%6===0){
//         console.log(i)
//     }
// }


// let total=0;
// for(let i=0; i<=20; i++){
//     if(i%3===0){
//     total=total+i;
//     }
// }
// console.log(total)


const numbers=[1,2,3,4,5,6,9,2,1,4,3,5];
const nameList=['rohid', 'tajpia', 'rahim', 'joba', 'rohan', 'nirjona', 'rawaha', 'rohid', 'rawaha', 'joba']
function noDupli(nums){
    const unique=[];
    for(const values of nums){
        if(unique.includes(values)===false){
            unique.push(values);
        }
    }
    return unique;
}
const uniqueNums= noDupli(nameList);
console.log(uniqueNums);
















