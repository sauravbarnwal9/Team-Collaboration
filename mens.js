var obj=[
    {
        imgurl:"https://rukminim2.flixcart.com/image/495/594/j15b6a80/t-shirt/a/u/p/l-1700927-hrx-by-hrithik-roshan-original-imaesga6hf4zperx.jpeg?q=50",
        brand:"Pause",
discrpt:"Men Cotton Long Sleeves Shrug",
discount_price:"₹ 359",
Price:"₹ 1,499",
discount:"-76%"


    },
    {
        imgurl:"https://rukminim2.flixcart.com/image/495/594/jr83gy80/t-shirt/u/w/y/m-2215170-roadster-original-imafdfsfnahfs3en.jpeg?q=50",
        brand:"JUBINATION",
discrpt:"Men Wool Sleeveless Sweater Pack Of 1",
discount_price:"₹ 799",
Price:"₹ 1,499",
discount:"-47%"


    }
    
]

var div=document.createElement("div")
div.setAttribute("id","container")

obj.forEach(function(el){





var div1=document.createElement("div")
var h1=document.createElement("h2")
var p=document.createElement("p")
var p1=document.createElement("p")
var p2=document.createElement("p")
var s=document.createElement("s")
p2.append(s)
var p3=document.createElement("p")

var divp=document.createElement("div")
divp.setAttribute("id","divp")
divp.append(p1,p2,p3)

var img=document.createElement("img")
img.setAttribute("src",el.imgurl)
div1.append(img,h1,p,divp)

div.append(div1)

document.querySelector("body").append(div)



h1.innerText=el.brand
p.innerText=el.discrpt
p1.innerText=el.discount_price
s.innerText=el.Price
p3.innerText=el.discount
p3.style.color="green"


})



