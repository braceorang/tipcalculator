
document.getElementById("numberbill").classList.remove("error");
document.getElementById("numberpeople").classList.remove("error");



// section bill ---------------------------------------------------------------

document.getElementById("numberbill").addEventListener("input", function () {
    if (!validateFloat(numberbill.value)) {
        numberbill.value = numberbill.value.substring(0, numberbill.value.length - 1)

    }
    bill = numberbill.value;
    console.log(bill)
    cal();

});



// section percent button ---------------------------------------------------------------
percentcontents = document.querySelectorAll(".percentContent")

percentcontents.forEach(function (percent) {
    percent.addEventListener("click", function (event) {
        percentcontents.forEach(function (percent) {
            percent.classList.remove("percentActive")
            if (event.target.value === percent.value) {
                percent.classList.add("percentActive")
                percentValue = percent.value

            }

        });
        numbercustom.value = ""
        cal();



    });


});

 
// section custom button ---------------------------------------------------------------

document.getElementById("numbercustom").addEventListener("input", function () {
    percentcontents.forEach(function (percent) {
        percent.classList.remove("percentActive")
    })    
    if (validateInt(numbercustom.value)) {
        numbercustom.value = numbercustom.value.substring(0, 2)
        percentValue = (numbercustom.value / 100).toFixed(2)
        console.log(percentValue);
        cal();
    } else {
        numbercustom.value = numbercustom.value.substring(0, numbercustom.value.length - 1)
    }






})



// section number people ---------------------------------------------------------------


document.getElementById("numberpeople").addEventListener("input", function () {
    if (!validateInt(numberpeople.value)) {
        numberpeople.value = numberpeople.value.substring(0, numberpeople.value.length - 1);
        document.getElementById("numberpeople").classList.add("error")
        console.log(person)
    } else {
        if (numberpeople.value <= 0) {
            document.getElementById("er2").classList.remove("sucess");
            document.getElementById("er2").classList.add("zeroEr")
            document.getElementById("numberpeople").classList.add("error")
        }
        person = numberpeople.value;
        console.log(person)
        cal();
    }


});


// section reset button---------------------------------------------------------------

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("total").innerHTML = "$" + "0.00";
    document.getElementById("tipAmout").innerHTML = "$" + "0.00";

})


//  section function    ---------------------------------------------------------------


function validateInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}


function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]{0,2}$/
    return s.match(rgx)
}



function cal() {

    if (person > 0) {
        var total = bill / person;
        var tipAmout = (bill * percentValue) / person;
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
        document.getElementById("tipAmout").innerHTML = "$" + tipAmout.toFixed(2);
    }

}


