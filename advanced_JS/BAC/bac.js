//BAC% = (A × 5.14 / W × r) - 0.015 × H
//A: Total alcohol consumed, in ounces (oz) 
//W: Body weight, in pounds (lbs) 
// r: The alcohol distribution ratio, 
// 0.73 for man, and 0.66 for women 
// H: Time passed since drinking, in hours

// Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), 
// and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
// For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling is needed.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.


// function profile(name, weight, gender, hours, oz, ABV){
//     this.name=name;
//     this.weight = weight;
//     this.gender=gender;
//     this.hours=hours;
//     this.oz = oz;
//     this.ABV=ABV

// }


// `var ${name.value}`= new profile `(${name.value}, ${weight.value}, ${gender.value}, ${hours.value}, ${oz.value}, ${ABV.value} )`





function calculate(){
    let W = parseFloat(`${weight.value}`)
    //console.log (W);
    //console.log (`${oz.value} * ${ABV.value}`) 
    let A = (parseFloat(`${oz.value}`) * parseFloat(`${ABV.value}`))
    //console.log (A);
    let H = parseFloat(`${hours.value}`)
    //console.log (H);
    let gender = $("input[name=gender]:checked".val)
    //console.log (gender)
    let r = parseFloat( gender  == "male" ? .73:.66)
    //console.log (r);
    let BAC = parseFloat((((A*5.14)/(W*r))-0.15) * H)
    console.log (BAC)
document.getElementById("return").innerHTML = "BAC"}
