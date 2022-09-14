let itemLeft = document.querySelector("#item-left span");
let list = document.querySelector("#list");
let choseItems = list.children[1].firstElementChild.firstElementChild;

itemLeft.onclick = function(){
    list.style.display = "block";

    setTimeout(() => {
        list.children[1].style.transform = "translate(0%, 0%)";
        list.children[0].style.opacity = "1";
    }, 10);
    
}

choseItems.onclick = function(){
    setTimeout(() => {
        list.style.display = "none";
    }, 1000);

    setTimeout(() => {
        list.children[1].style.transform = "translate(-100%, 0%)";
        list.children[0].style.opacity = "0";
    }, 10);

}

let cart = document.querySelector("#cart");
let request = true;

function showCart(){
    if(request){
        cart.style.height = "210px";
    }else{
        cart.style.height = "0px";
    }
    request = !request;
}

let number = 0;

let allTestImg = document.querySelectorAll("#container-img");

let iconsTest = document.querySelectorAll("#icons");

let smallImg = document.querySelectorAll("#smallimg");

for(let i = 0; i < allTestImg.length; i++){
    allTestImg[i].children[0].classList.add("active");
    smallImg[i].children[0].classList.add("active-opacity")
}

// Prev Icon Cont
iconsTest[0].children[0].onclick = function(){
    if(number === 0){
        return;
    }else{
        removeActive();
        number--;
        addActive();
    }
}
// Next Icon Cont
iconsTest[0].children[1].onclick = function(){
    if(number === allTestImg[0].children.length - 1){
        return;
    }else{
        removeActive();
        number++;
        addActive();
    }
}
// Prev Icon Cool
iconsTest[1].children[0].onclick = function(){
    if(number === 0){
        return;
    }else{
        removeActive();
        number--;
        addActive();
    }
}
// Next Icon Cool
iconsTest[1].children[1].onclick = function(){
    if(number === allTestImg[1].children.length - 1){
        return;
    }else{
        removeActive();
        number++;
        addActive();
    }
}

function removeActive(){
    for(let z = 0; z < allTestImg.length; z++){
        allTestImg[z].children[number].classList.remove("active");
        smallImg[z].children[number].classList.remove("active-opacity");
    }
}
function addActive(){
    for(let z = 0; z < allTestImg.length; z++){
        allTestImg[z].children[number].classList.add("active");
        smallImg[z].children[number].classList.add("active-opacity");
    }
}

for(let i = 0; i < smallImg.length; i++){
    Array.from(smallImg[i].children).forEach((el, index) => {
        el.onclick = function(){
            removeActive()
            number = index;
            addActive()
        }
    });
    
}

let cool = document.querySelector("#cool");

let closeCool = cool.firstElementChild.firstElementChild.firstElementChild;


for(let x = 0; x < allTestImg[0].children.length; x++){

    
        allTestImg[0].children[x].onclick = function(){

            if(window.innerWidth >= 768){

                cool.style.display = "block";

            }else{
                cool.style.display = "none";
            }
        
        }
    

}
closeCool.onclick = function(){
    cool.style.display = "none";
}
window.onresize = function(){
    if(window.innerWidth < 768){
        cool.style.display = "none";
    }
}


let chBtn = document.querySelector("#ch-btn");

let minus = chBtn.firstElementChild.firstChild;
let plus = chBtn.firstElementChild.lastChild;

let numberChBtn = chBtn.lastElementChild;

let numberIconCart = document.querySelector("#number-icon-cart");


plus.onclick = function(){
    plusFunction();
    iconCart();
    contentCart();
};

minus.onclick = function(){
    minusFunction();
    iconCart();
    contentCart();
};

function minusFunction(){
    if(parseInt(numberChBtn.textContent) === 0){
        return;
    }else{
        numberChBtn.textContent = parseInt(numberChBtn.textContent) - 1;
    }
}
function plusFunction(){
    numberChBtn.textContent = parseInt(numberChBtn.textContent) + 1;
}
function iconCart(){
    if(parseInt(numberChBtn.textContent) === 0){
        numberIconCart.style.display = "none";
    }else{
        numberIconCart.style.display = "block";
        numberIconCart.textContent = numberChBtn.textContent;
    }
}

let selectImg = smallImg[0].children;
let selectText = document.querySelector("#text-cart");
let selectPrice = document.querySelector("#prict-cart");

let imgCart = Array.from(selectImg).filter(img => img.classList.contains("active-opacity"));
let textCart = selectText.textContent;
let priceCart = parseInt(selectPrice.textContent.replace("$", ""));

let srcImg = imgCart[0].getAttribute("src");

let containerCart = cart.lastElementChild;

function contentCart(){
    if(parseInt(numberChBtn.textContent) === 0){
        containerCart.textContent = "Your cart is empty";
    }else{
        containerCart.textContent = "";
        let topCart = document.createElement("div");
        let btnCart = document.createElement("div");
        topCart.className = "top-cart";
        btnCart.className = "btn-cart";
    
        let imgTopCart = document.createElement("div");
        let textTopCart = document.createElement("div");
        imgTopCart.className = "img-top-cart";
        textTopCart.className = "text-top-cart";
    
        let ImgText = document.createElement("img");
        let headText = document.createElement("h3");
        let paragText = document.createElement("p");
        ImgText.setAttribute("src", srcImg);

        let numberParag = document.createElement("span");
        let priceParag = document.createElement("span");

        imgTopCart.appendChild(ImgText);
        headText.appendChild(document.createTextNode(textCart));
        paragText.appendChild(document.createTextNode("$" + priceCart + ".00"));
        numberParag.appendChild(document.createTextNode("× " + numberChBtn.textContent));
        priceParag.appendChild(document.createTextNode("$" + parseInt(numberChBtn.textContent) * parseInt(priceCart) + ".00"));
        paragText.appendChild(numberParag);
        paragText.appendChild(priceParag);
        btnCart.appendChild(document.createTextNode("Checkout"));
    
        textTopCart.appendChild(headText);
        textTopCart.appendChild(paragText);
    
        topCart.appendChild(imgTopCart);
        topCart.appendChild(textTopCart);
    
        containerCart.appendChild(topCart);
        containerCart.appendChild(btnCart);

    }
}

console.log(parseInt(priceCart));
