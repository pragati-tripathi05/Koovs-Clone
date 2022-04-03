function drop1() {
    var down = document.getElementById("down1")
    down.classList.toggle("show")
}
function drop2() {
    var down = document.getElementById("down2")
    down.classList.toggle("show")
}
function drop3() {
    var down = document.getElementById("down3")
    down.classList.toggle("show")
}
function drop4() {
    var down = document.getElementById("down4")
    down.classList.toggle("show")
}
function drop5() {
    var down = document.getElementById("down5")
    down.classList.toggle("show")
}
function drop6() {
    var down = document.getElementById("down6")
    down.classList.toggle("show")
}
function SortDown() {
    var down = document.getElementById("downTown")
    down.classList.toggle("show")
}

//---------------------------------------------------------------------------------------- 

var shop = [
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1826_360x.jpg?v=1640680368",
        gender: "women",
        brand: "BLUE SAINT",
        color: "skyblue",
        size: "s",
        name: "Casual Wear Front Knot Sky Blue Denim Shirt",
        price: "480",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/157258_5256a56a4fa24cb1806d7b5f64be729b_image1_zoom_360x.jpg?v=1631104736",
        gender: "women",
        brand: "BLUE SAINT",
        color: "black",
        size: "s",
        name: "Solid Basic Berry Blue Casual Wear Perfect Fit Shirt",
        price: "280",
        strikedoffprice: "499",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/167588_f20d9c065ab64b2e8233a9594dae30d4_image1_zoom_360x.jpg?v=1631125517",
        gender: "women",
        brand: "KOOVS",
        color: "green",
        size: "s",
        name: "Koovs Elasticated Waist Regular Fit Shorts",
        price: "420",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/166633_c72338e015b645bcbcc170f1205e377d_front_zoom_360x.jpg?v=1630508525",
        gender: "women",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Strappy Crop Top",
        price: "520",
        strikedoffprice: "599",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/166783_61ddaca506f94554b918cb76f3e81f61_image1_zoom_360x.jpg?v=1631106402",
        gender: "women",
        brand: "KOOVS",
        color: "orange",
        size: "s",
        name: "Hustle Smarter Text Print T-Shirt",
        price: "520",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1387_360x.jpg?v=1640347833",
        gender: "women",
        brand: "REALM",
        color: "skyblue",
        size: "s",
        name: "Overcoat Style Denim Jacket Casual Winter Wear",
        price: "720",
        strikedoffprice: "3599",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/166046_360464ee3aa34d68a5e9c5e2d9e55e61_front_zoom_360x.jpg?v=1630508717",
        gender: "women",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "One-Shoulder Casual Blouse",
        price: "690",
        strikedoffprice: "999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/167383_48f7b42110e541e384bb2479feacc361_image1_zoom_360x.jpg?v=1643366832",
        gender: "women",
        brand: "KOOVS",
        color: "pink",
        size: "s",
        name: "Koovs Strappy Cropped Top",
        price: "290",
        strikedoffprice: "599",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0865_360x.jpg?v=1640347832",
        gender: "women",
        brand: "REALM",
        color: "pink",
        size: "s",
        name: "Baby Pink Love Casual Wear Denim Jacket",
        price: "800",
        strikedoffprice: "3999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0766_360x.jpg?v=1640347831",
        gender: "women",
        brand: "REALM",
        color: "grey",
        size: "s",
        name: "Spotted Casual Wear White Denim Jacket",
        price: "840",
        strikedoffprice: "4199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0724_360x.jpg?v=1640347831",
        gender: "women",
        brand: "REALM",
        color: "white",
        size: "s",
        name: "Snow Flakes Print Casual Wear Street Denim",
        price: "549",
        strikedoffprice: "2949",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2373_360x.jpg?v=1640347829",
        gender: "women",
        brand: "REALM",
        color: "black",
        size: "s",
        name: "Tropical Green Casual Wear Solid Print Jacket",
        price: "760",
        strikedoffprice: "3799",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/157410_c7bff15c0d984e03a4afa85def0d57b2_image1_zoom_360x.jpg?v=1631111173",
        gender: "women",
        brand: "BLUE SAINT",
        color: "white",
        size: "s",
        name: "Heart-Rose Print T-Shirt",
        price: "280",
        strikedoffprice: "399",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1041_360x.jpg?v=1640680365",
        gender: "women",
        brand: "BLUE SAINT",
        color: "blue",
        size: "s",
        name: "Blue White Striped Strechable Casual Off Shoulder Top",
        price: "240",
        strikedoffprice: "399",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/157540_36813bb67e734ddda42ab866f412a4a8_front_zoom_360x.jpg?v=1630505709",
        gender: "women",
        brand: "BLUE SAINT",
        color: "black",
        size: "s",
        name: "Back Lace Round Neck Top",
        price: "690",
        strikedoffprice: "999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_2470_360x.jpg?v=1634749554",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "pink",
        size: "s",
        name: "One/Zero Basic Crew Neck Oversized T-Shirt",
        price: "450",
        strikedoffprice: "799",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/139022_1_360x.jpg?v=1632833217",
        gender: "women",
        brand: "KULTPRIT",
        color: "white",
        size: "s",
        name: "Kultprit All Over Printed T-Shirt",
        price: "170",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/25th-November-202040512150_360x.jpg?v=1632833218",
        gender: "women",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Kultprit Cold Shoulder Crop T-Shirt",
        price: "180",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/139013_1_360x.jpg?v=1632833204",
        gender: "women",
        brand: "KULTPRIT",
        color: "grey",
        size: "s",
        name: "Kultprit Color Block Raglan Sleeves Dress",
        price: "280",
        strikedoffprice: "899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A9761_360x.jpg?v=1644468224",
        gender: "women",
        brand: "ONE/ZERO BY KOOVS",
        color: "white",
        size: "s",
        name: "Phone Pocket Printed Leggings",
        price: "1799",
        strikedoffprice: "2799",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/169227_3a412147b9c146d18ef189c5a3de0c54_image1_zoom_360x.jpg?v=1631125070",
        gender: "women",
        brand: "K Denim",
        color: "grey",
        size: "s",
        name: "K Denim Koovs Curved Hem Paperbag Shorts",
        price: "750",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/169175_0d8b328ced20407a91b967ddee49664f_image1_zoom_360x.jpg?v=1631125172",
        gender: "women",
        brand: "K Denim",
        color: "blue",
        size: "s",
        name: "K Denim Koovs Dark Wash Belted Shorts",
        price: "750",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/169157_b9f75dccfdd44799a1a47dd6a4c05086_image1_zoom_360x.jpg?v=1631100547",
        gender: "women",
        brand: "K Denim",
        color: "skyblue",
        size: "s",
        name: "Frayed Hem Light-Wash Jeans",
        price: "850",
        strikedoffprice: "1699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165185_41209fba38f9454cbc7c1eb4188170ac_front_zoom_720x.jpg?v=1631105920",
        gender: "women",
        brand: "FUGAZEE",
        color: "red",
        size: "s",
        name: "Solid Off-Shoulder Top",
        price: "450",
        strikedoffprice: "1499",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165172_07a504319f34405ba5415b32006268a8_front_zoom_360x.jpg?v=1631105920",
        gender: "women",
        brand: "FUGAZEE",
        color: "white",
        size: "s",
        name: "Kimono Sleeve Polka Dot Top",
        price: "450",
        strikedoffprice: "1499",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165167_165a361e27c34685b393ea092129e407_front_zoom_360x.jpg?v=1631105922",
        gender: "women",
        brand: "FUGAZEE",
        color: "black",
        size: "s",
        name: "Solid Off-Shoulder Top",
        price: "450",
        strikedoffprice: "1499",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165939_322c312a8b30441eacc30532cef031df_image1_zoom_360x.jpg?v=1644821648",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "white",
        size: "s",
        name: "Reflective Logo Training T-Shirt",
        price: "450",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/163208_93be3e8750ab4b2789352d32568284b0_image1_zoom_360x.jpg?v=1631105827",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "white",
        size: "s",
        name: "One/Zero Basic Crew Neck Oversized T-Shirt",
        price: "250",
        strikedoffprice: "499",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165874_9466b5eea71049b5a79df6b819af664a_image1_zoom_360x.jpg?v=1631106226",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "yellow",
        size: "s",
        name: "Active Stretch Training T-Shirt",
        price: "450",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165943_2220659034d44d42a53c209bfd8719ff_image1_zoom_360x.jpg?v=1644821729",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "white",
        size: "s",
        name: "Racerback Training Vest",
        price: "450",
        strikedoffprice: "899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165128_2efa05f54a11493495e21c820a22539f_image1_zoom_360x.jpg?v=1631108860",
        gender: "women",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Basic Detachable Suspenders Jeans",
        price: "750",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/165950_2ad74677673c45dba6378df0e220051f_image1_zoom_360x.jpg?v=1631115718",
        gender: "women",
        brand: "One/Zero By Koovs",
        color: "white",
        size: "s",
        name: "Color Block Training T-Shirt",
        price: "450",
        strikedoffprice: "899",
    },
];

// {
//         image_url:
//             "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_3848_360x.jpg?v=1636526578",
//         gender: "men",
//         brand: "blue saint",
//         color:"blue",
//         size: "s",
//         name: "Solid Basic Berry Blue Casual Wear Perfect Fit Shirt",
//         price: "₹880",
//         strikedoffprice: "₹2199",
//     }

//         relevace: "rel" --> add it randomly

var cartProducts = JSON.parse(localStorage.getItem("cartData")) || [];

shop.map(function (elem) {
    displayData(shop);
});

function addToCart(elem) {
    console.log(elem);
    cartProducts.push(elem);
    localStorage.setItem("cartData", JSON.stringify(cartProducts));
    alert("item added to cart");
}

function FilterWomen() {
    var selected = document.querySelector("#selectWomen").value;
    var filteredList = shop.filter(function (elem) {
        return elem.gender == selected;
    });
    displayData(filteredList)
}

function FilterMen() {
    var selected = document.querySelector("#selectMen").value;

    var filteredList = shop.filter(function (elem) {
        return elem.gender == selected;
    });
    displayData(filteredList)
}

// <option id="BlueSaint" onclick="FilterBlueSaint()" class="top" value="bluesaint"><input class="check" type="checkbox"><a href="#">Blue Saint</a></option>

function blue(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "blue" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function skyblue(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "skyblue" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function grey(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "grey" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function pink(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "pink" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function darkblue(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "darkblue" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function black(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "black" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function Fwhite(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "white" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function orange(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "orange" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function brown(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "brown" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function red(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "red" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function green(){
    var filteredList = shop.filter(function(elem){
        var print =  elem.color == "green" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}

// <input onclick="Filterkoovs()" class="check" type="checkbox"><option style="display: inline;" id="koovs" onclick="Filterkoovs()" class="top" value="KOOVS"><a href="#">Koovs</a></option>

function FilterBlueSaint() {
    var selected = document.querySelector("#BlueSaint").value;
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == selected && elem.gender == "women"
        return print
    });
    displayData(filteredList)
}

function Filterkoovs() {
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == "KOOVS" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function FilterFugazee() {
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == "FUGAZEE" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}

function FilterOne() {
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == "One/Zero By Koovs" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function FilterReal() {
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == "REALM" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function FilterKult() {
    var filteredList = shop.filter(function (elem) {
        var  print =  elem.brand == "KULTPRIT" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}
function FilterK() {
    var filteredList = shop.filter(function (elem) {
        var print =  elem.brand == "K Denim" && elem.gender == "women"
        return print
    })
    displayData(filteredList)
}

document.querySelector(".countPlace2").innerText = cartProducts.length


function FilterRel() {

    var filteredList = shop.filter(function (elem) {
        return elem.gender == "women";
    });
    displayData(filteredList)
}

function FilterLth() {
    var selected = document.querySelector("#htl").value;
    var sortedList = shop.sort(function (a, b) {
        return a.price - b.price;
    });
    displayData(sortedList);
    }

function FilterHtl() {
    var selected = document.querySelector("#htl").value;
    var sortedList = shop.sort(function (a, b) {
        return b.price - a.price;
    });
    displayData(sortedList);
}

function FilterNto() {
    var selected = document.querySelector("#nto").value;
    var sortedList = shop.sort(function (a, b) {
        return b.strikedoffprice - a.strikedoffprice;
    });
    displayData(sortedList);
}

function displayData(shop) {
    document.querySelector("#products").innerHTML = "";
    shop.map(function (elem) {
        var box = document.createElement("div");
        box.style.position = "relative"
        var img = document.createElement("img");
        img.src = elem.image_url;
        img.style.paddingBottom = "0px"
        img.style.marginBottom = "0px"
        // img.style.position = "relative"
        var discount = document.createElement("div");
        // var solve = eval((Number(dsascore) + Number(scalScore) + Number(codingScore)) * 100 / 30)
        var offer = eval(((elem.strikedoffprice-elem.price)/elem.strikedoffprice)*100)
        discount.innerText = "-" + Math.floor(offer) + "%"
        discount.style.position = "absolute"
        discount.style.width = "40px"
        discount.style.padding = "5px"
        discount.style.paddingTop = "2px"
        discount.style.paddingBottom = "5px"
        discount.style.height = "15px"
        discount.style.color = "white"
        discount.style.textAlign = "center"
        discount.style.fontSize = "13px"
        discount.style.fontWeight = "600"
        discount.style.fontFamily = "Poppins"
        discount.style.backgroundColor = "crimson"
        discount.style.top = "10px"
        discount.style.right = "10px"
        var gender = document.createElement("p");
        gender.innerText = elem.gender
        var name = document.createElement("p");
        name.textContent = elem.name;
        name.style.fontWeight = "600"
        name.style.fontSize = "14px"
        name.style.fontFamily = "Poppins"
        name.style.paddingTop = "5px"
        var brand = document.createElement("p")
        brand.textContent = elem.brand;
        brand.style.fontSize = "14px"
        brand.style.fontFamily = "Poppins"
        brand.style.paddingTop = "5px"
        brand.style.color = "#87878a"
        var price = document.createElement("p");
        price.innerText = "₹ " + elem.price;
        price.style.color = "red";
        price.style.fontFamily = "Poppins"
        price.style.fontSize = "14px"
        price.style.display = "inline"
        var striked = document.createElement("p")
        striked.innerText = "₹ " + elem.strikedoffprice
        striked.style.display = "inline"
        striked.style.marginLeft = "10px"
        striked.style.textDecoration = "line-through"
        var btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.innerText.color = "white"
        btn.style.fontFamily = "Poppins"
        btn.style.width = "100%"
        btn.style.display = "block"
        btn.style.marginTop = "-6px"
        btn.style.paddingTop = "0px"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        btn.style.height = "40px"
        btn.style.border = "none"
        btn.onmouseover = function(){
            btn.style.color = "white"
            btn.style.backgroundColor = "grey"
        }
        btn.onmouseout = function(){
            btn.style.color = "white"
            btn.style.backgroundColor = "black"
        }
        // element.setAttribute("class", "democlass");
        btn.addEventListener("click", function () {
            addToCart(elem);
            window.location.reload();
            // <button onClick="window.location.reload();">
        });
        var colorCir = document.createElement("div")
        // colorCir.innerText = elem.color
        colorCir.style.width = "30px"
        colorCir.style.height = "30px"
        colorCir.style.marginTop = "10px"
        colorCir.style.borderRadius = "50%"
        colorCir.style.backgroundColor = elem.color
        colorCir.style.border = "1px solid #87878a"
        box.append(img, discount, btn, name, brand, price, striked, colorCir);
        document.querySelector("#products").append(box);
    });
}
