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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161660_8dd9306099884f08ac83e9833a476c66_image1_zoom_360x.jpg?v=1631103586",
        gender: "men",
        brand: "BLUE SAINT",
        color: "yellow",
        size: "s",
        name: "Side Tape Slim Fit Jogger",
        price: "550",
        strikedoffprice: "999",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/163191_5392f71652b94c36894d1edbc86fbde1_image1_zoom_360x.jpg?v=1631114560",
        gender: "men",
        brand: "BLUE SAINT",
        color: "brown",
        size: "s",
        name: "Stay Cool Text Print T-Shirt",
        price: "250",
        strikedoffprice: "499",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161672_aff8701ee02542ebafea272b68255eb7_image1_zoom_360x.jpg?v=1631103565",
        gender: "men",
        brand: "BLUE SAINT",
        color: "red",
        size: "s",
        name: "Basic Casual Slim Fit Jogger",
        price: "550",
        strikedoffprice: "999",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/0U9A2587_360x.jpg?v=1634749626",
        gender: "men",
        brand: "BLUE SAINT",
        color: "grey",
        size: "s",
        name: "Blue Saint Chambray Patch Pocket Casual Shirt",
        price: "800",
        strikedoffprice: "1599",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_2593_3ab578f3-2ee5-4a57-9b3c-c213c51880b9_360x.jpg?v=1635999851",
        gender: "men",
        brand: "BLUE SAINT",
        color: "darkblue",
        size: "s",
        name: "Solid Ocean Blue Plain Basic Casual Denim Shirt",
        price: "600",
        strikedoffprice: "1499",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1352_360x.jpg?v=1643171045",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Patch Pocket Corduroy Jacket",
        price: "1399",
        strikedoffprice: "1999",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2223_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
        price: "1259",
        strikedoffprice: "1799",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1817_360x.jpg?v=1643170741",
        gender: "men",
        brand: "KOOVS",
        color: "white",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
        price: "1329",
        strikedoffprice: "1899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2112_360x.jpg?v=1643170740",
        gender: "men",
        brand: "KOOVS",
        color: "darkgreen",
        size: "s",
        name: "Notch Lapel Forest Green Luxe Spread Collar Satin Shirt",
        price: "1259",
        strikedoffprice: "1799",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1845_360x.jpg?v=1643171196",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Pastel Patched Casual Wear Stylish Shirt",
        price: "1399",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2409_360x.jpg?v=1643176212",
        gender: "men",
        brand: "KOOVS",
        color: "orange",
        size: "s",
        name: "Earthy Patched Casual Wear Funky Shirt",
        price: "1399",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0118_3c6369fb-31c8-47eb-91b3-fc5c138a3565_360x.jpg?v=1647928125",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Pastle Green Casual Wear Smart Shirt",
        price: "1399",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0061_c227930a-93d1-4af9-8b1d-5beb08fa3900_360x.jpg?v=1647928124",
        gender: "men",
        brand: "KOOVS",
        color: "black",
        size: "s",
        name: "Hot Black Must Have Solid Shirt",
        price: "1399",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0033_360x.jpg?v=1647928124",
        gender: "men",
        brand: "KOOVS",
        color: "brown",
        size: "s",
        name: "Dark Brown Solid Patched Casual T-Shirt",
        price: "1999",
        strikedoffprice: "2999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1564_360x.jpg?v=1643170743",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Dark Brown Solid Patched Casual T-Shirt",
        price: "1399",
        strikedoffprice: "1899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2192_20509851-b608-4052-b7b9-7ab8efb94241_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Luxe Spread Collar Satin Shirt",
        price: "1329",
        strikedoffprice: "1899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2380_ea0fe150-74c6-4e8d-9909-620a35df0e1a_360x.jpg?v=1643175668",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Luxe Revre Collar Satin Shirt.",
        price: "1259",
        strikedoffprice: "1799",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2165_e1dc832d-bcbe-4a95-b1d4-0b19e9ad4889_360x.jpg?v=1643171197",
        gender: "men",
        brand: "KOOVS",
        color: "green",
        size: "s",
        name: "Casual Grass Green Basic Solid Shirt",
        price: "1359",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1584_360x.jpg?v=1643171197",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Casual Must Have Rich Black Solid T-Shirt",
        price: "1159",
        strikedoffprice: "1699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2447_360x.jpg?v=1643172963",
        gender: "men",
        brand: "KOOVS",
        color: "green",
        size: "s",
        name: "Back Welt Pocket Trouser",
        price: "1359",
        strikedoffprice: "2699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2426_360x.jpg?v=1643172963",
        gender: "men",
        brand: "KOOVS",
        color: "darkgreen",
        size: "s",
        name: "Back Welt Pocket Trouser",
        price: "1359",
        strikedoffprice: "2699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A2345_5e7eab96-7cb0-4469-8202-dc201480781f_360x.jpg?v=1643172964",
        gender: "men",
        brand: "KOOVS",
        color: "orange",
        size: "s",
        name: "Back Welt Pocket With Flap, Marble Wash",
        price: "1359",
        strikedoffprice: "1699",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/169023_bb1130fd364547a1a9430efecae28ed2_image1_zoom_360x.jpg?v=1631124840",
        gender: "men",
        brand: "FUGAZEE",
        color: "black",
        size: "s",
        name: "Fugazee Savage Layered Graphic Print Shorts",
        price: "690",
        strikedoffprice: "999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/169059_c395d0e45a234d7791bb215745b06b93_image1_zoom_360x.jpg?v=1631117258",
        gender: "men",
        brand: "FUGAZEE",
        color: "orange",
        size: "s",
        name: "Fugazee Anti Social Print Crew Neck T-Shirt",
        price: "590",
        strikedoffprice: "899",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_4596_360x.jpg?v=1634749588",
        gender: "men",
        brand: "FUGAZEE",
        color: "red",
        size: "s",
        name: "Soda Crown Shorts",
        price: "990",
        strikedoffprice: "1299",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_4816_360x.jpg?v=1634749589",
        gender: "men",
        brand: "FUGAZEE",
        color: "pink",
        size: "s",
        name: "Urban Camo Shorts",
        price: "900",
        strikedoffprice: "1699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_8436_360x.jpg?v=1634749616",
        gender: "men",
        brand: "KULTPRIT",
        color: "darkblue",
        size: "s",
        name: "Kultprit Men'S Jacket",
        price: "1900",
        strikedoffprice: "2699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161208_56f9a1b82c2e4488ab3ade60a0c35d10_image1_zoom_360x.jpg?v=1631103479",
        gender: "men",
        brand: "FUGAZEE",
        color: "white",
        size: "s",
        name: "Slogan Side Tape Detail Joggers",
        price: "1090",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A0770_b27e9faf-5a00-4130-a52d-9dd9fb6d25c5_360x.jpg?v=1643171158",
        gender: "men",
        brand: "KOOVS",
        color: "crimson",
        size: "s",
        name: "Satin Weave Cotton Trouser & Back Pocket With Flap",
        price: "1159",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1424_360x.jpg?v=1643169478",
        gender: "men",
        brand: "KOOVS",
        color: "red",
        size: "s",
        name: "Back Welt Pocket With Flap, Marble Wash",
        price: "1359",
        strikedoffprice: "1999",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/A07A1247_360x.jpg?v=1643171158",
        gender: "men",
        brand: "KOOVS",
        color: "grey",
        size: "s",
        name: "Satin Weave Cotton Trouser Back Welt Pocket With Flap",
        price: "1159",
        strikedoffprice: "1999",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/160767_316ea4b395994b21882b99854dd68d8d_image1_zoom_360x.jpg?v=1646477944",
        gender: "men",
        brand: "K Denim",
        color: "grey",
        size: "s",
        name: "Basic Slim Fit Jeans",
        price: "799",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/160765_9134adb87c434fc09aa4b23dd7f7ca34_image1_zoom_360x.jpg?v=1646477833",
        gender: "men",
        brand: "K Denim",
        color: "grey",
        size: "s",
        name: "Basic Slim Fit Jeans",
        price: "699",
        strikedoffprice: "1099",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/158477_16d3d276ec0246ce8f21e4d750f06ac5_image1_zoom_360x.jpg?v=1636354382",
        gender: "men",
        brand: "K Denim",
        color: "black",
        size: "s",
        name: "Dark-Wash Skinny Fit Jeans",
        price: "899",
        strikedoffprice: "1099",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/158440_82a971f7379f4da9b97e695b2ad4a272_image1_zoom_360x.jpg?v=1631101307",
        gender: "men",
        brand: "KULTPRIT",
        color: "blue",
        size: "s",
        name: "Dark-Wash Skinny Jeans",
        price: "999",
        strikedoffprice: "1099",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/158435_00f4a1b3f50f4cd4a685d472def093f3_image1_zoom_360x.jpg?v=1646478437",
        gender: "men",
        brand: "K Denim",
        color: "white",
        size: "s",
        name: "Basic Skinny Jeans",
        price: "699",
        strikedoffprice: "1099",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/167205_140d6dc78b3a44d085d2179fa05732f8_image1_zoom_360x.jpg?v=1631100242",
        gender: "men",
        brand: "K Denim",
        color: "sky blue",
        size: "s",
        name: "Light-Wash Cropped Denim Jeans",
        price: "800",
        strikedoffprice: "1399",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/167777_3472262220ca46f895a601834e6f143a_image1_zoom_360x.jpg?v=1631125149",
        gender: "men",
        brand: "K Denim",
        color: "darkgreen",
        size: "s",
        name: "K Denim Koovs Roll-Up Hem Shorts",
        price: "600",
        strikedoffprice: "1199",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/170846_e8234b215ce840d7a2493fb691ad987e_image1_zoom_360x.jpg?v=1631102332",
        gender: "men",
        brand: "FUGAZEE",
        color: "white",
        size: "s",
        name: "Skin Friendly And Breathable",
        price: "850",
        strikedoffprice: "1699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_4347_360x.jpg?v=1634749590",
        gender: "men",
        brand: "FUGAZEE",
        color: "blue",
        size: "s",
        name: "Electric Blue V-Neck Tee",
        price: "600",
        strikedoffprice: "1699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_5661_360x.jpg?v=1634749589",
        gender: "men",
        brand: "FUGAZEE",
        color: "green",
        size: "s",
        name: "Olive Patched V-Neck Tee",
        price: "600",
        strikedoffprice: "1199",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_5172_fc258cc0-1900-41a4-8b96-2ea221b365ce_360x.jpg?v=1634749587",
        gender: "men",
        brand: "FUGAZEE",
        color: "brown",
        size: "s",
        name: "Charcoal Bulletholes Scoop Neck Tee",
        price: "650",
        strikedoffprice: "1199",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_8250_360x.jpg?v=1634749616",
        gender: "men",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
        price: "550",
        strikedoffprice: "999",
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
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_7760_360x.jpg?v=1634749615",
        gender: "men",
        brand: "KULTPRIT",
        color: "grey",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
        price: "350",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/171951_226c514b8b80445792ea5ed7945b6073_image1_super_zoom2_360x.jpg?v=1634749610",
        gender: "men",
        brand: "KULTPRIT",
        color: "black",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
        price: "419",
        strikedoffprice: "699",
    },
    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/IMG_7530_360x.jpg?v=1634749612",
        gender: "men",
        brand: "KULTPRIT",
        color: "yellow",
        size: "s",
        name: "Kultprit Men'S Sleeveless T-Shirt",
        price: "419",
        strikedoffprice: "699",
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

    {
        image_url:
            "https://cdn.shopify.com/s/files/1/0584/9399/3141/products/161672_aff8701ee02542ebafea272b68255eb7_image1_zoom_360x.jpg?v=1631103565",
        gender: "men",
        brand: "BLUE SAINT",
        color: "red",
        size: "s",
        name: "Basic Casual Slim Fit Jogger",
        price: "550",
        strikedoffprice: "999",
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
    displayData(shop)
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
    displayData(filteredList);
}

function FilterMen() {
    var selected = document.querySelector("#selectMen").value;

    var filteredList = shop.filter(function (elem) {
        return elem.gender == selected;
    });
    displayData(filteredList)
}

// <option id="BlueSaint" onclick="FilterBlueSaint()" class="top" value="bluesaint"><input class="check" type="checkbox"><a href="#">Blue Saint</a></option>

function FilterBlueSaint() {
    var selected = document.querySelector("#BlueSaint").value;

    var filteredList = shop.filter(function (elem) {
        return elem.brand == selected;
    });
    displayData(filteredList)
}

function blue(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "blue"
    })
    displayData(filteredList)
}
function skyblue(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "skyblue"
    })
    displayData(filteredList)
}
function grey(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "grey"
    })
    displayData(filteredList)
}
function pink(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "pink"
    })
    displayData(filteredList)
}
function darkblue(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "darkblue"
    })
    displayData(filteredList)
}
function black(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "black"
    })
    displayData(filteredList)
}
function Fwhite(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "white"
    })
    displayData(filteredList)
}
function orange(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "orange"
    })
    displayData(filteredList)
}
function brown(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "brown"
    })
    displayData(filteredList)
}
function red(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "red"
    })
    displayData(filteredList)
}
function green(){
    var filteredList = shop.filter(function(elem){
        return elem.color == "green"
    })
    displayData(filteredList)
}

// <input onclick="Filterkoovs()" class="check" type="checkbox"><option style="display: inline;" id="koovs" onclick="Filterkoovs()" class="top" value="KOOVS"><a href="#">Koovs</a></option>

function Filterkoovs() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "KOOVS"
    })
    displayData(filteredList)
}
function FilterFugazee() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "FUGAZEE"
    })
    displayData(filteredList)
}

function FilterOne() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "One/Zero By Koovs"
    })
    displayData(filteredList)
}
function FilterReal() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "REALM"
    })
    displayData(filteredList)
}
function FilterKult() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "KULTPRIT"
    })
    displayData(filteredList)
}
function FilterK() {
    var filteredList = shop.filter(function (elem) {
        return elem.brand == "K Denim"
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
    var selected = document.querySelector("#lth").value;
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
