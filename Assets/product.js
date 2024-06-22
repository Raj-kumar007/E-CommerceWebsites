const cartIcon = document.querySelector(".fa-bars")
const menuTop = document.querySelector(".main-top-2")
const cartclose = document.querySelector(".fa-xmark")

// add to cart

const addOpen = document.querySelector(".Shopping")
const cartOpen = document.querySelector(".fa-bag-shopping")
const addClose = document.querySelector(".div-close")
const cartDiv =  document.querySelector(".cart-div")
const cartContainer =  document.querySelector(".cart-container")

// console.log(addOpen);

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

addClose.addEventListener("click",function (params) {
    cartContainer.classList.remove("cartOpen") 
 })

 var productStoredArray= []

document.addEventListener("DOMContentLoaded",loadEvent)

function loadEvent(params) {
// remove cart

const removeIcon = document.querySelectorAll(".fa-trash")
removeIcon.forEach(function(icon){
    icon.addEventListener("click",removeProduct)
})

// plus and minus  /////

const plusCount = document.querySelectorAll(".plus")
const minusCount = document.querySelectorAll(".minus")

plusCount.forEach(function (icon) {
    icon.addEventListener("click",increment)
})

minusCount.forEach(function (icon) {
    icon.addEventListener("click",decrement)

    
})


const productCount = document.querySelectorAll(".collection-count")
productCount.forEach( function (input) {
    input.addEventListener("change",minus)

} )


const detailCount = document.querySelector(".details-count")
detailCount.addEventListener("keyup",minus)

totalcalculation()

}




// input box

function removeProduct(params) {
alert("Do you want to Delete this Item")

this.parentNode.remove()

const removeProductName = this.parentNode.querySelector(".cartName").innerText.replace("Name :","")
console.log(removeProductName);

const findRemoveIndex = productStoredArray.findIndex(function (product) {
    return product.cartName===removeProductName
    
})
console.log(findRemoveIndex);


if (findRemoveIndex>=0) {
    productStoredArray.splice(findRemoveIndex,1)    
}
console.log(productStoredArray);
loadEvent()

}





function minus(params) {
    if (this.value <= 1 ) {
        this.value=1
        // console.log(this.value);
    }
loadEvent()
    
}

function increment(params) {
    var productCount = this.parentNode.querySelector(".collection-count")
    productCount.value++
    loadEvent()
 }


function decrement(params) {
    var productCount = this.parentNode.querySelector(".collection-count")
    productCount.value--
    if (productCount.value <= 1 ) {
     productCount.value=1
     // console.log(this.value);
 }
 loadEvent()
 }


const addCart = document.querySelectorAll(".quick-add")

// console.log(addCart);


addCart.forEach(function (Cart) {
    Cart.addEventListener("click",function getProductInfo(params) {
    const product = this.parentNode
   
   const productName = product.querySelector(".addname").innerHTML
   const productPrice = product.querySelector(".addprice").innerHTML
   const productImage = product.querySelector(".addImage").src
   const productColor = product.querySelector(".addcolor").innerHTML
   
   
   
   putProductInfo(productImage,productName,productPrice,productColor)
   
    }
     ) }
   
)








// add to show the product /

function putProductInfo(image,name,price,color) {
    const cartPageImage = document.querySelector(".cartImage")
      cartPageImage.src = image
  
  const cartPageName = document.querySelector(".product-name")
      cartPageName.innerText = name
 
      const homePageName = document.querySelector(".home-name")
     homePageName.innerHTML=name
  const cartPagePrice = document.querySelector(".product-price")
      cartPagePrice.innerText = price

      const cartPageColor = document.querySelector(".product-color")
      cartPageColor.innerText = color  



  
      // console.log(cartPageImage,cartPageName,cartPagePrice);
  
  }
  
  

///add to bag button/ 

const addToBag = document.querySelector(".add-to-bag");


addToBag.addEventListener("click",addToCart)

// add to bag//

function addToCart(){
   const cartImage = document.querySelector(".cartImage").src
const cartName = document.querySelector(".product-name").innerText
const cartColor = document.querySelector(".product-color").innerText
const cartPrice = document.querySelector(".product-price").innerText

console.log(cartImage,cartName,cartPrice,cartColor);



// add to cart design//


const cartProductDesign = `<div class="cart-items">
<div class="cart-image">
    <img src="${cartImage}"  alt="">
</div>
<div class="cart-image-details">
    <div class="div-details">
        <div class="cart-detail">
            <div class="cart-name">
                <h3 class="cartName"><span class="cart-div-name">Name :</span>${cartName}</h3>

            </div>
            <div class="div-color">
                <h3  class="cart-color"> <span class="cart-div-color" >Color :</span> ${cartColor}</h3>
            </div>
            <div class="cart-price">
                <h3 class="addprice">${"$"," ",cartPrice}</h3>
            </div>
        </div>
       
        <div class="cart-input">
            <div class="cart-count">
                <h3 class="minus">-</h3>
                <h3 ><input class="collection-count" type="text" value="1"></h3>
                <h3 class="plus">+</h3>
            </div>
            <h3 class="collection-total"></h3>
        </div>
    </div>
            
</div>
<i class="fa-solid fa-trash"></i>

</div>`



const productStoredObject = {cartName};


const findIndex = productStoredArray.findIndex(function (product) {
    return product.cartName == cartName    
})
console.log(findIndex);

if (findIndex>=0) {
    alert("product Already Added")    
    return;

} else {
    handleNotify()
       productStoredArray.push(productStoredObject);
}

    

console.log(productStoredObject);
console.log(productStoredArray);

const createDiv = document.createElement('div')
createDiv.innerHTML = cartProductDesign
const cartCollection = document.querySelector(".cart-product-info")
cartCollection.appendChild(createDiv)

loadEvent()

}


function totalcalculation(params) {
    const cartproducts =  document.querySelectorAll(".cart-items")
    console.log(cartproducts);
    
var totalAmount =  0
cartproducts.forEach(function (cproduct) {

    var cartCount = cproduct.querySelector(".collection-count").value
    const cartPrice = cproduct.querySelector(".addprice").innerText .replace("$","")
    var cartAmount = cproduct.querySelector(".collection-total")

    // plus minus count

    console.log(cartCount);

    cartAmount.innerHTML="$"+" "+ cartCount*cartPrice

    totalAmount += cartCount*cartPrice


    console.log(cartAmount);
})


const cartTotal = document.querySelector(".total-price")

console.log(cartTotal);
cartTotal.innerHTML="$"+" " +totalAmount

const cartnotify = document.querySelector(".bag-count")
 cartnotify.innerHTML= productStoredArray.length
 
 const addnotify = document.querySelector(".cart-number")
 addnotify.innerHTML= productStoredArray.length 

 const notify = document.querySelector(".cart-notify")
 notify.innerHTML= productStoredArray.length 
 
}


function handleNotify(params) {
    const successNotify = document.querySelector(".success")
    successNotify.style.opacity=1
    successNotify.style.transform='translate(-50%,-50%) scaleX(1)'

    setTimeout(() => {
        successNotify.style.opacity=0
    successNotify.style.transform='translate(-50%,-50%) scaleX(1)'

    }, 1000);
}


