// github link: https://github.com/masrurahmadnayel/third-assignment

// first problem solution code:

function kilometerToMeter(km) {   
    if (km < 0 || km.length >= 0 || km === -0){    // this line of code is for handling unexpected values.
        console.log("Error: please enter your value.");
    }
    else {
        var value = km * 1000;
    }
    return value;
}


// second problem solution code:

function budgetCalculator(clock, mobile, laptop) {
    if (clock < 0 || mobile < 0 || laptop < 0) {     // for handling negative value
        console.log("Error: Please Enter the value again.")
    }
    else if ( clock.length >= 0 || mobile.length >= 0 || laptop.length >= 0){    // for handling string value
        console.log("Error: product amount cannot be a string, Please enter how many products you want to buy.")
    }
    else if (Number.isInteger(clock) === false || Number.isInteger(mobile) === false || Number.isInteger(laptop) === false){   // for handling decimal value
        console.log("Error: product amount cannot be negative.");
    }
    else {
        clock = clock * 50;
        mobile = mobile * 100;
        laptop = laptop * 500;
        var total = clock + mobile + laptop;
    }
    return total;
}


// third problem solution code:

function hotelCost(rent){
    if (rent < 0 || rent.length >= 0 || rent === -0){   //  this line of code is for handling unexpected values
        console.log("Error: Invalid value input again");
    }
    else if (Number.isInteger(rent) === false){     // this line of code for handling decimal value error.
        console.log("Error: day value cannot be decimal, please enter again.")
    }
    else if (rent <= 10){
        rent = rent * 100;
        return rent;
    }
    else if (rent > 10 && rent <= 20){
        rent = ((rent - 10) * 80) + 1000;
        return rent;
    }
    else{
        rent = ((rent - 20) * 50) + 1800;
        return rent;
    }
}


// fourth problem solution code:

function megaFriend(names){
    var bigOne = names[0]
    for (var i = 0; i < names.length; i++){
        var friends = names[i];
        if (Number.isFinite(friends) === true){    // this line os code is for unexpected values
            bigOne = "Error: Please enter any valid name.";
        }
        else if (bigOne.length < friends.length){
            bigOne = friends;
        }
    }
    return bigOne;
}


