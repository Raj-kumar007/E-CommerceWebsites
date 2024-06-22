// // var id = 100
// // console.log(typeof(id));

// // var std ="12th"
// // console.log(typeof(std));
// // console.log(id+std);

// // var statement = false
// // console.log(typeof(statement));


// // var a = 
// // console.log(a);
  
// // let number=null
// // console.log(number);


// // var electronice=["mobile","laptop","tv","computer"]

// // console.log(electronice[1]);

// // var electronices=[
// // ["oppo","redmi","vivo"],
// // ["asus","hp","lenova"],
// // ["boat","realme","one +"]
// // ]
// //  console.log(electronices[1]);
// // console.log(electronices[0][1]);

// //    var accessories = {
// //     Name : "buds" ,
// //     color :["black","red","blue"], 
// //     height : "5.5cm",
// //     sound : "dual speaker"  
// //    }

// //    console.log(accessories.color[1]);
// //    console.log(accessories.sound);



// // var dress=[
// //     {
// //         Name:"t-shirt",
// //         color:["black","yellow","darkblue",],
// //         img:["img-2.webp","img-4.webp","img-5.webp"],
// //         specfic:"solid round neck",
// //         size:["x","M","L"],
// //         price:"rs-250"
// //     },
// //     {
// //         Name:"ladies t-shirt",
// //         color:["blue","lightblue","white",],
// //         img:["img-1.webp","img-3.webp","img-7.webp"],
// //         specfic:"solid round neck",
// //         size:["x","M","L"],
// //         price:"rs-450"
// //     },
// //     {
// //         Name:"men-shirt",
// //         color:["blue","lightblue","white",],
// //         img:["download.jpeg","download-1.jpeg","download-2.jpeg"],
// //         specfic:"full hand shirt",
// //         size:["x","M","L"],
// // price:"rs-700"
// //     }
// // ]
// // console.log(dress[1].img[1]);
// // console.log(dress[2].size[0]);
// // console.log(dress[1].specfic);
// // console.log(dress[1].color[2]);


// // function data(Name,age,gender) {

// //  var person_1= {
// //     Name :Name,
// //     age :age,
// //     gender:gender
// //  }

// //  console.log(person_1);
// // }
// // data("raj","21","male")
// // data("kumar","22","male")

// // function area(a,b) {
// // var ground={
// //     length:a+b,
// //     breadth:a*b,
   
 
// // }   
// // console.log(ground); 
// // }
// // area(20,30)
// // area(50,10)
// // area(80,90)


// // function price(amount) {
// //     var total={
// //         Price:amount,
// //         interest:tax=amount*18/100,
// //         value:amount+tax

// //     }
// // console.log(total);    
// // }

// // price(30000)
// // price(40000)
// // price(50000)




// // function entername(phone,slang,brandlogo) {
// //     var product = {
// //               mobile:phone,
// //             quotes:slang,
// //         logo:brandlogo
// //     }
// //     {
// //   console.log(product);  
// //     }

// // }
// // entername("oppo","dreamscomestrue","oppo")
// // entername("samsung","make it","samsung")
// // entername("redmi","world no 1","mi")

// // function employee(amount,da,ph,esi) {
// // var salary={
// //     hospital:esi=amount/8,
// //     longterm:ph=amount/10,
// //     travel:da=amount/20,
// //     balance:amount-(esi+ph+da)
// // }
// //   console.log(salary);  
// // }
// // employee(40000)
// // employee(20000)
// // employee(50000)

// // var number=[2,3,5,7,11,13,17]
// // number.pop()
// // number.push(21)
// // number.shift()
// // number.unshift(1)
// // number.splice(2,2)
// // console.log(number);


// // // {1,3,11,13,21}


// // var number1=[2,4,6,8,10,12,14,16,18,20]
// // number1.pop()
// // number1.push(21)
// // number1.shift()
// // number1.unshift(0)
// // number1.splice(3,3,9,11,13)
// // console.log(number1);


// // // (0,4,6,9,11,13,14,16,18,21)


// // var number = [4,9,16,25];
// // var newnumber = number.map (function(num) {
// //     return num*10
    
// // })

// // console.log(newnumber);

// // var person = [
// //     {firstname:"raj",lastname:"kumar",},
// //     {firstname:"arun",lastname:"kumar",},
// //     {firstname:"sanjay",lastname:"kumar",},
// //     {firstname:"rajesh",lastname:"kanana",},
// //     {firstname:"suriya",lastname:"prakash",},
// // ];
// // var fullname= person.map (function(fname) {
// //     return fname.firstname + " " + fname.lastname
    
// // })
// // console.log(fullname);

// var mail=["raj","hari","vimal","arun","kumar"]
//  var add = mail.map (function(head) {  
//     return "mr" +" "+ head  +":"
//  })
//  console.log(add);

// // var even=[1,2,3,4,5,6,7,8,9,10]
// // var num=even.map(function(equal) {
// //     return equal%2
// // })
// // console.log(num);


// // var dress=[
// //     {
// //         Name:"t-shirt",
// //         color:"darkblue",
// //         specfic:"solid round neck",
// //         size:"x",
// //         price:"rs-250"
// //     },
// //     {
// //         Name:"ladies t-shirt",
// //         color:"white",
// //         specfic:"solid round neck",
// //         size:"x",
// //         price:"rs-450"
// //     },
// //     {
// //         Name:"t-shirt",
// //         color:"blue",
// //         specfic:"full hand shirt",
// //         size:"x",
// // price:"rs-700"
// //     },
// //     {
// //         Name:"t-shirt",
// //         color:"blue",
// //         specfic:"solid round neck",
// //         size:"l",
// //         price:"rs-250"
// //     },
// //     {
// //         Name:"ladies t-shirt",
// //         color:"white",
// //         specfic:"solid round neck",
// //         size:"l",
// //         price:"rs-450"
// //     },
// //     {
// //         Name:"t-shirt",
// //         color:"blue",
// //         specfic:"full hand shirt",
// //         size:"l",
// // price:"rs-700"
// //     }
// // ]

// // var product = dress.filter (function (item) {
// //  return item.Name == "t-shirt" || item.size =="l"
// // })
// // console.log(product);


// // var number = [1,2,3,4,5,6,7,8,9,10]
// // var total =number.reduce(function(acc,cur) {
// // return acc*cur    
// // }) 


// // console.log(total);

// // for (let item = 1; item < 10; item++){
// //     console.log(item +" " + "Tables"+":");

// //     for (let items = 1; items < 10; items++) {

// //         console.log(items + "*" + item + "=" +items*item);
// //           }
// // }

// // const cartIcon = document.querySelector(".fa-bars")
// // const cartContainer = document.querySelector(".main-top-2")
// // const cartClose = document.querySelector(".fa-xmark")

// // // console.log(cartIcon,cartContainer,cartClose);
// // cartIcon.addEventListener("click",function(paramas){
// //     cartContainer.classList.add("cartOpen")
// // })


// // cartClose.addEventListener("click",function(paramas){
// //     cartContainer.classList.remove("cartOpen")
// // })


// const cartOpen = document.querySelector(".cartIcon")
// const cartClose = document.querySelector(".cartClose")
// const cartContainer = document.querySelector(".cart-container") 



// cartOpen.addEventListener("click",function(params) {
//     cartContainer.classList.add("cartOpen")
// })
// cartClose.addEventListener("click",function (params) {
//     cartContainer.classList.remove("cartOpen")    
// })
//  var productStoreArray = []

// document.addEventListener("DOMContentLoaded",loadEvent)

// function loadEvent() {
// // cart remove  
//     const removeIcon  = document.querySelectorAll(".fa-trash")

//     removeIcon.forEach(function (icon) {
    
//         icon.addEventListener("click",removeProduct)

//     }) 

//     const productCount = document.querySelectorAll(".productNos")

//     productCount.forEach(function (input) {
//       input.addEventListener("change",minus) 
//     })

    
// totalcalculation()
    
// }


    
// function minus (params) {
        
//     if (this.value <= 1) {
    
// this.value=1
        
//     }
// loadEvent()

// }


// function removeProduct (params) {
//     const parent = this.parentNode
//          parent.remove()  
//     loadEvent()
//     const removeProductName = parent.querySelector(".productName").innerHTML
    
    
//     console.log(removeProductName);
//     const findRemoveIndex = productStoreArray.findIndex(function (product) {
//         return product.productName===removeProductName
//      })
//             console.log(findRemoveIndex);
            
//     if (findRemoveIndex>=0) {
//         productStoreArray.splice(findRemoveIndex,1)
        
//     }
//     console.log(productStoreArray);

//     loadEvent()
//      }


// const addBtn = document.querySelectorAll(".pr-btn")
// console.log(addBtn);

// addBtn.forEach(function (btn){
// btn.addEventListener("click", getProductInfo)

// })

// function getProductInfo(params) {
//     const product = this.parentNode
//     console.log(product);
//     const productName = product.querySelector(".prname").innerText
//     const productImage = product.querySelector(".productImage").src
//     const productPrice = product.querySelector(".price").innerText

  

//     const productStoreObject = {productName}
 


//     const findIndex = productStoreArray.findIndex(function (product) {
//         return product.productName == productName
        
//     })
    
    
//     console.log(findIndex);
    
//     if (findIndex >= 0) {
//         alert ( "Product Already Add ")
//         return;
//     } else{
//         productStoreArray.push(productStoreObject)
    
//     }
//     console.log(productStoreArray);
//     console.log(productStoreObject);
     


//     // console.log(productName,productImage,productPrice);



//  var createDiv = document.createElement("div")
//  createDiv.innerHTML = putProductInfo(productImage,productName,productPrice)
// //  console.log(createDiv);
//  const cartContainer = document.querySelector(".cart-product-hold")
//  cartContainer.appendChild(createDiv)


//  loadEvent()
// }

// function putProductInfo(Image,Name,Price) {
//     return ` <div class="cartProducts">
//     <img src=${Image} alt="">
//     <div class="cProductinfo">
//         <h1 class="productName">${Name}</h1>
//         <h1 class="productPrice">${Price}</h1>
//         <div class="product-count"> <input type="number" name="" class="productNos" id=""  value="1"> <h2 class="totalProductPrice"></h2></div>
//     </div>
//     <i class="fa-solid fa-trash"></i>
// </div>`
    
// }

// function totalcalculation(params) {
//     const cartProducts =document.querySelectorAll(".cartProducts")

//     console.log(cartProducts);


//     var totalAmount = 0

    
// cartProducts.forEach(function (cproduct){
//         const productCount = cproduct.querySelector(".productNos").value
//         const productPrice = cproduct.querySelector(".productPrice").innerText.replace("Rs."," ")
//         var totalProductPrice = cproduct.querySelector(".totalProductPrice")

//         totalProductPrice.innerHTML = "Rs." + productCount*productPrice

//     totalAmount+= productCount*productPrice
        
//         console.log(productCount,productPrice,totalProductPrice,totalAmount);
//     })

//  const cartTotal = document.querySelector(".total-amount")

//  console.log(cartTotal);
//  cartTotal.innerHTML="Rs ." + totalAmount

//  const cartnotify = document.querySelector(".cartNotify")
      
//  cartnotify.innerHTML=productStoreArray.length

// }




// const productCount = document.querySelectorAll(".collection-count")
//  productCount.forEach( function(input) {
//     input.addEventListener("click",minus)
//  })

//  function minus(params) {

//   if (this.value>=1) {
//     this.value=1
//   } 
//  }

// function add(params) {
//     console.log("1 function");
//     for (let a = 0;  a < 100; a++) {
        
//         console.log(a);
//     }
//     console.log("last function");
    
// }

// add()


// function asycones(params) {

// console.log("1st line");
// setTimeout(() => {
// console.log("2st line");
    
// }, 1000);
// console.log("3st line");

    
// }
// asycones()

// const check = new Promise((resolve, reject) => {
//     const error = f
// if (error) {
//     resolve("the promise is resolved")

// }else{
//     reject("cant be resolved")

// }
// })
// check
// .then((data)=>{
// console.log(data+" hii..");
// })
// .catch((err)=>{
//     console.log("Error : " + err);
// })

// const bannerImage = document.querySelectorAll(".banner-img") 
// const banSelect = document.querySelectorAll(".ban-dot") 


// banSelect.forEach(function name(dot) {
// dot.addEventListener("click",function name(params) {
//     var numberOfdot=dot.getAttribute("data-option")
// console.log(numberOfdot);
// var selectedImage = document.querySelector(`.banner-img[data-image="${numberOfdot}"]`)

// console.log(selectedImage);
// bannerImage.forEach(function name(image) {
//     image.classList.remove("active-banner")
// })

// selectedImage.classList.add("active-banner")
// })    
// })

// const bannerImage = document.querySelectorAll(".banner-img")
// const banDot = document.querySelectorAll(".ban-dot")


// banDot.forEach(function name(dot) {
//     dot.addEventListener("click",function name(params) {
//         var numberOfdot= dot.getAttribute("data-option")
//         console.log(numberOfdot);

//          var selectedImage = document.querySelector(`.banner-img[data-image="${numberOfdot}"]`)
// bannerImage.forEach(function name(image) {
//     image.classList.remove("active-banner")
  
// })
//     selectedImage.classList.add("active-banner")

//         })    
// })



// placeOrder("chicken")
// function placeOrder(data) {
//     const status = true
//     const food = data

//     if (status) {
//         orderconfirm(food)
//     } else {
//         orderFailed(food)
//     }
    
// }
// function orderconfirm(food) {
//     console.log(food+" order confirmed");
// orderDelivered(food)
// }
// function orderDelivered(food) {
//     console.log(food+" order delivered");
// }
// function orderFailed(food) {
//     console.log(food+" orded failed");
// }



// function promisecheck(params) {
// return new Promise((resolve, reject) => {
//     const food="dose"
//     const status= false
//     if (status) {
//         resolve(food)
//     } else {
//         reject("order failed")
//     }
// })    
// }
// promisecheck()
// .then((outcome)=>{
//     console.log(outcome+" order confirm");
// return outcome
// })
// .then((outcome)=>{
//     console.log(outcome+" order delivered");
// })
// .catch((err)=>{
//     console.log(err);
// })


// const orded1 = new Promise((resolve, reject) => {
//    const status= false
// const food = "dose"
//    if (status) {
//         resolve(food)
//     } else {
//         reject("order failed")
//     }
// })

// async function asycones(params) {
// try {
//     orded10 = await orded1

//     console.log(orded10 + " order successful");
//     console.log(orded10 + " order delivered");
//     }
//  catch (error) {
//     console.log("error on await : " +error);
// }
// }
// asycones()


// fetch("https://fakestoreapi.com/products")
// .then((TextData)=>{
//     return TextData.json()
// })
// .then((product)=>{
//     console.log(product);
//     var productdesign = product.map(function name(data) {
//         return`  <div class="product-items">
//         <div class="product-img">
//             <img src="${data.image}" alt="">
//         </div>
//         <div class="product-name">Name :${data.title}</div>
//         <div class="product-price">Price :${data.price}</div>
//     </div>`
        
//     }).join(" ")
//     var design = document.querySelector(".product-container")
// design.innerHTML= productdesign

// })

// fetch("https://fakestoreapi.com/products")
// .then((textData)=>{
//      return textData.json()
// })
// .then((Product)=>{
//     console.log(Product);
//  var productdesign = Product.map(function name(data) {
//     return`<div class="product-items">
//     <div class="product-img">
//         <img src="${data.image}" alt="">
//     </div>
//     <div class="product-name">Name :${data.title}</div>
//     <div class="product-price">Price :${data.price}</div>
// </div>`    
//  }).join("")
//  var design = document.querySelector(".product-container")
// design.innerHTML= productdesign
// })


//  const passwordVIew = document.querySelector(".visible")
//  passwordVIew.addEventListener("click",function name(params) {
//   const reg_password = document.querySelector("#password")
  
//   reg_password.type = (reg_password.type==="password") ? "text" : "password"
//   passwordVIew.innerHTML = (reg_password.type==="password") ? `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`
//  })


// const loginFormBtn = document.querySelector(".log")
// const registorFormBtn = document.querySelector(".registerup")
// const loginForm = document.querySelector(".log-form")
// const registerForm = document.querySelector(".register-fill")
// const holderBtn = document.querySelector(".btn-selector")




// registorFormBtn.addEventListener("click",function name(event) {
//     var data = event.target.getBoundingClientRect()
//     var targetLeft = event.target.parentNode.getBoundingClientRect()
//     var actualLeft = data.left - targetLeft.left

//     console.log( data.left,targetLeft.left,actualLeft);
// holderBtn.style.left=actualLeft+"px"
//     loginForm.style.height="0px"
//     registerForm.style.height="600px"

//     document.querySelector(".register-form").style.height="600px"
// })

// loginFormBtn.addEventListener("click",function name(event) {
//     var data = event.target.getBoundingClientRect()
//     var targetLeft = event.target.parentNode.getBoundingClientRect()
//     var actualLeft = data.left - targetLeft.left

//     console.log( data.left,targetLeft.left,actualLeft);
//     holderBtn.style.left=actualLeft+"px"

//     loginForm.style.height="400px"
//     registerForm.style.height="0px"

//     document.querySelector(".register-form").style.height="400px"
// })























