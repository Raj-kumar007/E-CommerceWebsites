 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBF-bSMutaQKaZAwUvTNsYM3pGJuduok6w",
    authDomain: "online-shopping-c3fbd.firebaseapp.com",
    projectId: "online-shopping-c3fbd",
    storageBucket: "online-shopping-c3fbd.appspot.com",
    messagingSenderId: "912431514660",
    appId: "1:912431514660:web:747ea9652511fa2a7f44b1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const auth = getAuth();
  
function registor(params) {
    const reg_email = document.querySelector("#email").value
    const reg_password = document.querySelector("#password").value
    console.log(reg_email,reg_password);

    const error_msg = document.querySelector(".error")
error_msg.innerText=""

if (reg_email==="") {
error_msg.innerText="Enter Your Email"
return;    
}
// else if (reg_email!=="/^[^\s@]+@[^\s@]+\.[^\s@]+$/;") {
// error_msg.innerText="Enter The Correct Email Format"
// return; 
// }
else if (reg_password==="") {
    error_msg.innerText="Enter Your Password"
    return;    
}
else if (reg_password.lenght < 8) {
     error_msg.innerText="password cant be access less than charater"
      return; 
}


    createUserWithEmailAndPassword(auth, reg_email, reg_password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Registor Successful")
      closeLoginPage()
      // window.location.href="./index.html"     // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("Registor Failed")
      // ..
      
      const error_msg = document.querySelector(".error")
      error_msg.innerText="Email has been Already Registor"
    });

    
}

// // password view
const passwordVIew = document.querySelector('.visible')
passwordVIew.addEventListener("click",function name(params) {
  const reg_password = document.querySelector("#password")

  reg_password.type = (reg_password.type === "password") ? "text" : "password"
  passwordVIew.innerHTML =  (reg_password.type === "password") ?  `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`
  
})


const view_password = document.querySelector(".log-view") 
view_password.addEventListener("click", function name(params) {
  const password_visible = document.querySelector(".l-password")
  password_visible.type=(password_visible.type==="password")?"text":"password"
  view_password
  
})

module.registor=registor





function login(params) {
 var log_mail =document.querySelector(".l-email").value 
 var log_password =document.querySelector(".l-password").value
 
 console.log(log_mail,log_password);

signInWithEmailAndPassword(auth, log_mail,log_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem("Email :",log_mail)
    localStorage.setItem("accesstoken :", user.accesstoken)
    closeLoginPage()
alert("logIn success")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("logIn failed")
  });
}



function closeLoginPage(params) {
  const LogInPageClose = document.querySelector(".profile")
  LogInPageClose.classList.remove("logOpen")
}

module.login=login








