let listingsSection = document.getElementById("listings-container");
let dropDown = document.getElementById("dropDown");

let container1 = document.createElement("div");
let container2 = document.createElement("div");
let container3 = document.createElement("div");
let container4 = document.createElement("div");

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");

let div1P = document.createElement("p");
let div2P = document.createElement("p");
let div3P = document.createElement("p");
let div4P = document.createElement("p");

let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");
let img4 = document.createElement("img");

//variables for images
let imgHeight = "9.7vw";
let imgWidth = "15vw";
let imgRadius = "25px";

let src1 = "https://i.postimg.cc/0QG4wP3P/pic1.jpg";
let src2 = "https://i.postimg.cc/MHdr9tqL/pic2.jpg";
let src3 = "https://i.postimg.cc/mZwqZZCS/pic3.jpg";
let src4 = "https://i.postimg.cc/Fz9Bbw5c/pic4.jpg";

//listing div variables
let listingWidth = "50vw";
let listingHeight = "10vw";
let divBorderRadius = "25px";
let divBackgroundColor = "#D9D1C7";

img1.style.width = imgWidth;
img1.style.height = imgHeight;
img1.style.borderTopLeftRadius = imgRadius;
img1.style.borderBottomLeftRadius = imgRadius;
img1.style.borderRight = "3px solid #27668C";
img1.style.backgroundClip = "padding-box";

img2.style.width = imgWidth;
img2.style.height = imgHeight;
img2.style.borderTopLeftRadius = imgRadius;
img2.style.borderBottomLeftRadius = imgRadius;
img2.style.borderRight = "3px solid #27668C";

img3.style.width = imgWidth;
img3.style.height = imgHeight;
img3.style.borderTopLeftRadius = imgRadius;
img3.style.borderBottomLeftRadius = imgRadius;
img3.style.borderRight = "3px solid #27668C";

img4.style.width = imgWidth;
img4.style.height = imgHeight;
img4.style.borderTopLeftRadius = imgRadius;
img4.style.borderBottomLeftRadius = imgRadius;
img4.style.borderRight = "3px solid #27668C";



img1.setAttribute("src", src1);
img2.setAttribute("src", src2);
img3.setAttribute("src", src3);
img4.setAttribute("src", src4);

container1.style.backgroundColor = "cyan";
container1.style.width = "50vw";
container1.style.height = "10vw";
container1.style.position = "relative";
container1.style.top = "-5vw";
container1.style.display = "flex";
container1.style.flexDirection = "column";
container1.style.justifyContent = "center";
container1.style.alignItems = "center";
container1.style.borderRadius = divBorderRadius;

container2.style.backgroundColor = "cyan";
container2.style.width = "50vw";
container2.style.height = "10vw";
container2.style.position = "relative";
container2.style.top = "0vw";
container2.style.display = "flex";
container2.style.flexDirection = "column";
container2.style.justifyContent = "center";
container2.style.alignItems = "center";
container2.style.borderRadius = divBorderRadius;

container3.style.backgroundColor = "cyan";
container3.style.width = "50vw";
container3.style.height = "10vw";
container3.style.position = "relative";
container3.style.top = "5vw";
container3.style.display = "flex";
container3.style.flexDirection = "column";
container3.style.justifyContent = "center";
container3.style.alignItems = "center";
container3.style.borderRadius = divBorderRadius;

container4.style.backgroundColor = "cyan";
container4.style.width = "50vw";
container4.style.height = "10vw";
container4.style.position = "relative";
container4.style.top = "10vw";
container4.style.display = "flex";
container4.style.flexDirection = "column";
container4.style.justifyContent = "center";
container4.style.alignItems = "center";
container4.style.borderRadius = divBorderRadius;

div1.style.backgroundColor = divBackgroundColor;
div1.style.width = listingWidth;
div1.style.height = listingHeight;
div1.setAttribute("price", 100);
div1.style.borderRadius = divBorderRadius;
div1.setAttribute("rand", 145);
div1.style.textAlign = "center";
div1.appendChild(img1);
div1.style.display = "flex";
div1.style.flexDirection = "row";
div1.style.alignItems = "flex-start";
div1.style.justifyContent = "flex-start";
div1.style.border = "3px solid #27668C";
div1P.style.position = "relative";
div1P.style.left = "1vw";
div1P.style.top = "2vw";
div2.setAttribute("location","Phillipines");
div1P.innerHTML =
 "Cost per night: $" + div1.getAttribute("price") + "<br>Rooms Open: 7<br>Phone: (555) 555-5555<br> Email: Hotels@hotels.com<br>Location: Phillipines";
div1.appendChild(div1P);

div2.style.backgroundColor = divBackgroundColor;
div2.style.width = listingWidth;
div2.style.height = listingHeight;
div2.setAttribute("price", 150);
div2.style.borderRadius = divBorderRadius;
div2.setAttribute("rand", 1);
div2.style.textAlign = "center";
div2.appendChild(img2);
div2.style.display = "flex";
div2.style.flexDirection = "row";
div2.style.alignItems = "flex-start";
div2.style.justifyContent = "flex-start";
div2.style.border = "3px solid #27668C";
div2.setAttribute("location","Egypt");
div2P.style.position = "relative";
div2P.style.left = "1vw";
div2P.style.top = "2vw";
div2P.innerHTML =
 "Cost per night: $" + div2.getAttribute("price") + "<br>Rooms Open: 7<br>Phone: (555) 555-5555<br> Email: Hotels@hotels.com<br>Location: Egypt";
div2.appendChild(div2P);

div3.style.backgroundColor = divBackgroundColor;
div3.style.width = listingWidth;
div3.style.height = listingHeight;
div3.setAttribute("price",200);
div3.style.borderRadius = divBorderRadius;
div3.setAttribute("rand", 3);
div3.style.textAlign = "center";
div3.appendChild(img3);
div3.style.display = "flex";
div3.style.flexDirection = "row";
div3.style.alignItems = "flex-start";
div3.style.justifyContent = "flex-start";
div3.style.border = "3px solid #27668C";
div3P.style.position = "relative";
div3P.style.left = "1vw";
div3P.style.top = "2vw";
div2.setAttribute("location","Bahamas");
div3P.innerHTML =
 "Cost per night: $" + div3.getAttribute("price") + "<br>Rooms Open: 7<br>Phone: (555) 555-5555<br> Email: Hotels@hotels.com<br>Location: Bahamas";
div3.appendChild(div3P);

div4.style.backgroundColor = divBackgroundColor;
div4.style.width = listingWidth;
div4.style.height = listingHeight;
div4.setAttribute("price",250);
div4.style.borderRadius = divBorderRadius;
div4.setAttribute("rand", 2);
div4.style.textAlign = "center";
div4.appendChild(img4);
div4.style.display = "flex";
div4.style.flexDirection = "row";
div4.style.alignItems = "flex-start";
div4.style.justifyContent = "flex-start";
div4.style.border = "3px solid #27668C";
div2.setAttribute("location","Egypt");
div4P.innerHTML =
 "Cost per night: $"
 + div4.getAttribute("price") +
  "<br>Rooms Open: 7<br>Phone: (555) 555-5555<br> Email: Hotels@hotels.com<br>Location: Florida";

div4P.style.position = "relative";
div4P.style.left = "1vw";
div4P.style.top = "2vw";
div4.appendChild(div4P);

let containers = [container1,container2,container3,container4];
let divs = [div1,div2,div3,div4];
let loc1 = div1.getAttribute("location");
let loc2 = div2.getAttribute("location");
let loc3 = div3.getAttribute("location");
let loc4 = div4.getAttribute("location");
let locations = [loc1,loc2,loc3,loc4];

listingsSection.appendChild(container1);
listingsSection.appendChild(container2);
listingsSection.appendChild(container3);
listingsSection.appendChild(container4);

window.addEventListener("load",function(){
  for(let i = 0; i <= containers.length; i++){
    divs.sort((a,b) => a.getAttribute("rand") - b.getAttribute("rand"));
    containers[i].appendChild(divs[i]);
  }
},false);

dropDown.onchange = function(){

  let value = dropDown.options[dropDown.selectedIndex].value;

  if(value == "none"){
    for(let i = 0; i <= containers.length; i++){
      divs.sort((a,b) => a.getAttribute("rand") - b.getAttribute("rand"));
      containers[i].appendChild(divs[i]);
    }
  } else if(value =="lowHigh"){
    for(let i = 0; i <= containers.length; i++){
      divs.sort((a,b) => a.getAttribute("price") - b.getAttribute("price"));
      containers[i].appendChild(divs[i]);
    }
  }else if(value == "highLow"){
    for(let i = 0; i <= containers.length; i++){
      divs.sort((a,b) => b.getAttribute("price") - a.getAttribute("price"));
      containers[i].appendChild(divs[i]);
    }
  }
}
