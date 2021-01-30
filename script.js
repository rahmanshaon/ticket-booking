// First class ticket price

function firstTicketPrice(increase){
    const firstClassInput = document.getElementById("firstTicketCount");
    const firstInputNumber = parseInt(firstClassInput.value);
    let firstNewInput = firstInputNumber;
    if(increase == true){
         firstNewInput = firstInputNumber + 1 ;
    }
    if(increase == false && firstInputNumber > 0){
         firstNewInput = firstInputNumber - 1 
    };
    firstClassInput.value = firstNewInput;
    const firstTotalPrice = firstNewInput * 150;
    document.getElementById("firstClassPrice").innerHTML = "$" + firstTotalPrice;
    calculateSubTotal()
}

// Economy class ticket price

function economyTicketPrice(increase){
    const economyClassInput = document.getElementById("economyTicketCount");
    const economyInputInt = parseInt(economyClassInput.value);
    let economyNewInput = economyInputInt;
    if(increase == true){
        economyNewInput = economyInputInt + 1 ;
    }
    if(increase == false && economyInputInt > 0){
        economyNewInput = economyInputInt - 1 
    };
    economyClassInput.value = economyNewInput;
    const economyTotalPrice = economyNewInput * 100;
    document.getElementById("economyClassPrice").innerHTML = "$" + economyTotalPrice;
    calculateSubTotal()
}

// Total price calculation

function calculateSubTotal(){
    const firstClassInput = document.getElementById("firstTicketCount");
    const firstInputNumber = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economyTicketCount");
    const economyInputNumber = parseInt(economyClassInput.value);

    const subTotal = firstInputNumber * 150 + economyInputNumber * 100;
    document.getElementById("sub-total").innerHTML = "$" + subTotal;


    const tax = subTotal * 0.10;
    document.getElementById("tax-amount").innerHTML = "$" + tax;


    const allTotalCost = subTotal + tax;
    document.getElementById("all-total").innerText = "$" + allTotalCost
}