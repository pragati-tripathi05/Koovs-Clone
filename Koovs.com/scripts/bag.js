var cartProducts = JSON.parse(localStorage.getItem("cartData"));
// console.log(cartData);

displayData(cartProducts);

// Calculating total price of items
var total = cartProducts.reduce(function(sum,elem){
    return sum + Number(elem.price);
}, 0);


console.log(total);
document.querySelector("#sumtotal").innerText = `₹ ${total}`;


function displayData(cartProducts) {

    cartProducts.map(function (elem,index) {
        var product = document.createElement("div");
        product.setAttribute("class","productBox");
        product.style.width="180px";

        var image = document.createElement("img");
        image.src = elem.image_url;
        image.setAttribute("class","productImg");
        image.style.width = "55%";
        image.style.height = "100px";
        image.style.marginTop = "15px";

        var pName = document.createElement("h6");
        pName.innerText = elem.name;
        pName.style.fontSize ="10px"

        var priceRem = document.createElement("div");
        priceRem.style.marginTop="-30px"

        var pPrice = document.createElement("span");
        pPrice.innerText = "₹" + elem.price;
        pPrice.style.fontWeight = "bold";

        //remove button
        // var rembtn = document.createElement("button");
        // rembtn.innerText="Remove";
        // rembtn.style.border = "1px solid grey";
        // rembtn.style.borderRadius = "5px";
        // rembtn.style.marginLeft = "5%";
        // rembtn.style.fontWeight = "bold";
        var rembtn = document.createElement("img");
        rembtn.src="data:image/png;base64,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";
        rembtn.style.width = "10%";
        rembtn.style.marginLeft="80px";
        rembtn.style.marginTop="10px";
        rembtn.style.cursor = "pointer";

        rembtn.addEventListener("click",function(){
            removeItem(elem,index);
        });

        priceRem.append(pPrice,rembtn);

        product.append(image);
        product.append(pName);
        product.append(priceRem);
        
        document.querySelector(".products").append(product);
    });

}

function removeItem(elem,index){
    console.log(elem,index);
    cartProducts.splice(index,1);
    console.log(cartProducts);
    localStorage.setItem("cartData",JSON.stringify(cartProducts));
    window.location.reload();
    //displayData(cartProducts);
}

function FilterK() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "K Denim"
    })
    displayData(filteredList)
}

document.querySelector(".countPlace2").innerText = cartProducts.length;

