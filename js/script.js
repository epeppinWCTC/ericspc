$(document).ready(function () {

    //function run when input changes
    $(".input-group").change(serviceChecked)
    var serviceValue = [];
    var servicePrice = [];
    var timeArray = [];


    function serviceChecked() {
        //Collect checked items
        var checkedItems = $("input:checked");
        var serviceTotal = 0;
        var timeTotal = 0;
        var output = "";
        serviceValue = [];
        servicePrice = [];
        timeArray = [];
        // add each item, price, and hours to arrays
        checkedItems.each(function () {
            output = "";
            serviceValue.push($(this).val());
            servicePrice.push($(this).data("price"));
            timeArray.push($(this).data("time"))
            output += (serviceValue.join(", "))
        });


        // Calculate total price
        serviceTotal = servicePrice.reduce(function (a, b) {
            return a + b;
        }, 0)

        //Calculate total time

        timeTotal = timeArray.reduce(function (a, b) {
            return a + b;
        }, 0)

        //Display totals
        $("#options").text(output)
        $("#hours").text(`${timeTotal} hr(s)`)
        $("#total").text(`$${serviceTotal.toFixed(2)}`)


    }

});