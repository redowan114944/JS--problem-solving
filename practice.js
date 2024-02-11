// task 1
const burgerPrice= 510;
if(burgerPrice > 500){
    console.log('Free Mojo');
}
else{
    console.log('20 taka for Mojo')
}

//task 2
const weight = 69;
const height = 66;
const heightMeter = height / 39.37;
const BMI= weight / (heightMeter**2);
console.log(BMI);

if(BMI < 18.5){
    console.log('underweight');
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log('Normal');
}
else if(BMI >= 25 && BMI <=29){
    console.log('Overweight')
}
else{
    console.log('Healthy');
}

// task 3
