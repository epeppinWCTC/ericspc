$(document).ready(function () {

    $(".input-group").change(serviceChecked)
    var serviceValue = [];
    var servicePrice = [];
    var timeArray = [];

    function serviceChecked() {
        var checkedItems = $("input:checked");
        var serviceTotal = 0;
        var timeTotal = 0;
        var output = "";
        serviceValue = [];
        servicePrice = [];
        timeArray = [];
        checkedItems.each(function () {
            output = "";
            serviceValue.push($(this).val());
            servicePrice.push($(this).data("price"));
            timeArray.push($(this).data("time"))
            output += (serviceValue.join(", "))
        });

        serviceTotal = servicePrice.reduce(function (a, b) {
            return a + b;
        }, 0)

        timeTotal = timeArray.reduce(function (a, b) {
            return a + b;
        }, 0)

        $("#options").text(output)
        $("#hours").text(`${timeTotal} hr(s)`)
        $("#total").text(`$${serviceTotal.toFixed(2)}`)


    }

});