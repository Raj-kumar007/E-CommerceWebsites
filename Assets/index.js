const cartIcon = document.querySelector(".fa-bars")
const menuTop = document.querySelector(".main-top-2")
const cartclose = document.querySelector(".fa-xmark")


const cartOpen = document.querySelector(".cart-open")
const addOpen = document.querySelector(".fa-bag-shopping")
const cartClose = document.querySelector(".add-to-close")
const cartContainer = document.querySelector(".add-to-cart")
const logIn = document.querySelector(".fa-user")
const logContainer = document.querySelector(".profile")
const logClose = document.querySelector(".log-close")



logIn.addEventListener("click",function name(params) {
    logContainer.classList.add("logOpen")
})
logClose.addEventListener("click",function name(params) {
    logContainer.classList.remove("logOpen")
})
cartIcon.addEventListener("click",function(paramas){
    menuTop.classList.add("menuOpen")
})
cartclose.addEventListener("click",function(paramas){
    menuTop.classList.remove("menuOpen")
})
addOpen.addEventListener("click",function (params) {
    cartContainer.classList.add("cartOpen")     
 })
cartOpen.addEventListener("click",function (params) {
   cartContainer.classList.add("cartOpen")     
})
cartClose.addEventListener("click",function (params) {
    cartContainer.classList.remove("cartOpen")    
})

var productStoredArray =[]

document.addEventListener("DOMContentLoaded",loadEvent)

function loadEvent(params) {
    // remove cart
    const removeIcon = document.querySelectorAll(".fa-trash")
    removeIcon.forEach(function(icon) {
        icon.addEventListener("click",removeProduct)  
    })

    // input box
const plusCount = document.querySelectorAll(".plus")
const minusCount = document.querySelectorAll(".minus")

plusCount.forEach(function (icon) {
    icon.addEventListener("click",increment)
    
})
minusCount.forEach(function (icon) {
    icon.addEventListener("click",decrement)
    
})

const productCount = document.querySelectorAll(".amount")

productCount.forEach(function (input) {
    input.addEventListener("keyup",minus)
})

totalcalculation()
    
}



function removeProduct(params) {
    const parent = this.parentNode
    parent.remove()   
    
const removeProductName = parent.querySelector(".cart-name").innerText.replace("Name:","").trim()
console.log(removeProductName);
const productRemoved= document.querySelector(".remove-notify")
productRemoved.style.opacity=1

setTimeout(() => {
productRemoved.style.opacity=0
    
}, 1000);


const findRemoveIndex = productStoredArray.findIndex(function name(product) {
 return product.productName===removeProductName  

})

console.log(findRemoveIndex);

if (findRemoveIndex>=0) {
    productStoredArray.splice(findRemoveIndex,1);
    
}
console.log(productStoredArray);
loadEvent()
}




function increment(params) {
    var productCount= this.parentNode.querySelector(".amount")
    productCount.value++
 if(productCount.value > 10){
    alert("Over Stock ")
productCount.value =10
 }
loadEvent()
}

function decrement(params) {
    var productCount= this.parentNode.querySelector(".amount")
    productCount.value--
    if (productCount.value <=1) {
        productCount.value=1
    }
loadEvent()

}



function minus(params) {
if (this.value <=1 ) {

    this.value=1    
}  
else if (this.value>10 ){
    alert("over stock")
    this.value=10
}
loadEvent()
}




const button = document.querySelectorAll(".quick-add")
button.forEach(function(btn) {
    btn.addEventListener("click",getProductInfo)
})
function getProductInfo(params) {
    const product= this.parentNode
    const productName= product.querySelector(".product-name").innerHTML
    const productImage= product.querySelector(".product-image").src
    const productPrice= product.querySelector(".doller").innerText.replace("$"," ")
    const productColor=product.querySelector(".product-cc").innerText
    console.log(productName,productImage,productPrice,productColor);

    const productStoreObject={productName}
    
    const findIndex = productStoredArray.findIndex(function name(product) {
        return product.productName==productName        
    })
    if (findIndex>=0) {
        alert("product already added")
        return;
    } else {
    productStoredArray.push(productStoreObject)

    const productNotify = document.querySelector(".success")

productNotify.style.opacity=1
productNotify.style.zIndex=20

setTimeout(() => {
    productNotify.style.opacity=0
productNotify.style.zIndex=-3

}, 1000);
    }
    
    
    console.log(productStoredArray);
    console.log(productStoreObject);


    var createDiv = document.createElement("div")
    createDiv.innerHTML=putProductinfo(productImage,productName,productPrice,productColor)
    // console.log(createDiv);

    const productContainer = document.querySelector(".cart-scroll")
    productContainer.appendChild(createDiv);

    loadEvent()

   
}






function putProductinfo(Image,Name,price,color) {
    return` <div class="cart-items">
    <div class="cproduct">
        <div class="cart-image">
            <img src="${Image}" alt="">
        </div>
        <div class="cart-details">
            <div class="cart-info">
                <h2 class="cart-name"> Name:${Name} </h2>
                <h2 class="cart-amount">$ ${price}</h2>
                <h2 class="cart-color"> <span class="cart-cc">Color : </span>${color}</h2>
                <div class="total">
                    <div class="ad">
                        <h2 class="minus">-</h2>
                        <h2 ><input type="text" class="amount" value="1"></h2>
                        <h2 class="plus">+</h2>
                    </div>
                    <h2 class="product-value"></h2>
                </div>
            </div>
        </div>
    </div>
   
    <i class="fa-solid fa-trash" title="Remove"></i>
</div>`
    
}



function totalcalculation(params) {
    const cartProduct = document.querySelectorAll(".cart-items")
    console.log(cartProduct);
    var totalAmount=0

    cartProduct.forEach(function (cproduct) {
        const productCount = cproduct.querySelector(".amount").value
        const productAmount = cproduct.querySelector(".cart-amount").innerText.replace("$ ","")
        var ProductTotal = cproduct.querySelector(".product-value")
        
        ProductTotal.innerHTML="$ "+productCount*productAmount

    totalAmount+= productCount*productAmount
        console.log(productCount,productAmount,ProductTotal,totalAmount);
    })

    const cartTotal= document.querySelector(".total-amount")
    console.log(cartTotal);

cartTotal.innerHTML="$ "+totalAmount


const cartNotify = document.querySelector(".cart-nos")
cartNotify.innerHTML=productStoredArray.length

const cartsNotify = document.querySelector(".count-notify")
cartsNotify.innerHTML=productStoredArray.length

const carNotify = document.querySelector(".notify-nos")
carNotify.innerHTML=productStoredArray.length
}





// banner

const bannerImage = document.querySelectorAll(".banner-img")
const banSelect = document.querySelectorAll(".ban-dot")

console.log(banSelect);

banSelect.forEach(function (dot) {
dot.addEventListener("click",function (params) {
   var numberOfdot = dot.getAttribute("data-option")
   


   var selectedImage = document.querySelector(`.banner-img[data-image="${numberOfdot}"]`)
console.log(selectedImage);

bannerImage.forEach(function (image) {
    image.classList.remove("active-banner")
})
selectedImage.classList.add("active-banner")

})    


})


const loginFormBtn = document.querySelector(".log")
const registorFormBtn = document.querySelector(".registerup")
const loginForm = document.querySelector(".log-form")
const registerForm = document.querySelector(".register-fill")
const holderBtn = document.querySelector(".btn-selector")
console.log(loginFormBtn,registorFormBtn);


registorFormBtn.addEventListener("click",function (event) {
  var data = event.target.getBoundingClientRect()
  var parentData = event.target.parentNode.getBoundingClientRect()
var actualLeft = data.left - parentData.left

  console.log(data.left,parentData.left,actualLeft);
   holderBtn.style.left= actualLeft+"px"
   loginForm.style.height='0px'
   registerForm.style.height='600px'




   document.querySelector(".register-form").style.height="600px"

})
loginFormBtn.addEventListener("click",function (event) {
    
    var data = event.target.getBoundingClientRect()
    var parentData = event.target.parentNode.getBoundingClientRect()
    var actualLeft = data.left - parentData.left

    console.log(data.left,parentData.left,actualLeft);


    holderBtn.style.left= actualLeft+"px"
   loginForm.style.height='400px'
   registerForm.style.height='0px'



   document.querySelector(".register-form").style.height="400px"


})










