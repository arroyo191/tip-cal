

function calu() {
    var bill = document.getElementById("bill-amount").value;
var tip =  document.getElementById("tip").value;
    var cost = bill * (tip/100);
    document.getElementById("display-total-bill").innerHTML =  ("Tip $" + cost);  
}
