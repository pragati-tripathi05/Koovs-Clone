var cartData = JSON.parse(localStorage.getItem("cart"));
console.log(cartData);


cartData.map(function (elem) {
    var product = document.createElement("div");
    product.setAttribute("class","productBox");

    var image = document.createElement("img");
    image.src = elem.imgUrl;
    image.setAttribute("class","productImg");
    image.style.width = "50%";
    image.style.height = "100px";
    // image.style.marginLeft ="-120px"
    // image.style.marginTop="25px";

    var pName = document.createElement("h5");
    pName.innerText = elem.name;
    pName.style.fontSize ="16px"

    var pPrice = document.createElement("p");
    pPrice.innerText = elem.price;
    // pPrice.style.marginLeft="210px";
    // pPrice.style.marginTop="-100px";
    
    var line=document.createElement("hr");

    product.append(image);
    product.append( pName );
    product.append(pPrice);
    product.append(line);
    

    document.querySelector(".products").append(product);


    var total = cartData.reduce(function(sum,elem,index,arr){
        return sum+Number(elem.pPrice);
    }, 0);
    
    console.log(total);
    document.querySelector("#sumtotal").innerText = `  ₹ ${total}`
});

