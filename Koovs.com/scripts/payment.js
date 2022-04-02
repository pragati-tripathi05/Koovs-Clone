var cartProducts = JSON.parse(localStorage.getItem("cartData"));

var total = cartProducts.reduce(function(sum,elem) {
    return sum + Number(elem.price);
},0);

document.querySelector("#showTotal").innerText = `Rs. ${total}`;

document.querySelector(".discount > button").addEventListener("click",applyDiscount);
var count = 1;
function applyDiscount() {
    
    var promo = document.querySelector("#code").value;
    if (promo == 'kookoo10' && count == 1)
    {
        total = total - ((total*10)/100);
        document.querySelector("#showTotal").innerText = `Rs. ${total}`;
        count++;
    }
}

document.querySelector("form").addEventListener("submit", getDetails);

var pay_ship_details = JSON.parse(localStorage.getItem("paymentDetails")) || [];

function getDetails() {
    event.preventDefault();

    var addDetails = {
        firstName: document.querySelector("#first_name").value,
        lastName: document.querySelector("#last_name").value,
        company: document.querySelector("#com").value,
        address: document.querySelector("#addr").value,
        apartment: document.querySelector("#flat").value,
        city: document.querySelector("#city").value,
        state: document.querySelector("#state").value,
        pin: document.querySelector("#pin").value,
        mobile: document.querySelector("#phone").value,
        cardNumber: document.querySelector("#cardNum").value,
        cvv: document.querySelector("#cvv").value,
        expiryDate: document.querySelector("#expire").value,
        cardName: document.querySelector("#cardName").value,
        country: document.querySelector("#country").value,
        address: document.querySelector("#address").value,
    };

    pay_ship_details.push(addDetails);

    localStorage.setItem("paymentDetails",JSON.stringify(pay_ship_details));

    window.location.href = "orderComplete.html";
}