// ===============================
// Diyorbek AI
// script.js
// ===============================

// ===============================
// Admin Account
// ===============================

const ADMIN_EMAIL = "diyorbekabdumominov69@gmail.com";
const ADMIN_PASSWORD = "1292632";

// ===============================
// Login
// ===============================

function login(){

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if(email==="" || password===""){
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }

    if(email===ADMIN_EMAIL && password===ADMIN_PASSWORD){

        localStorage.setItem("logged","true");
        localStorage.setItem("role","admin");
        localStorage.setItem("email",email);

        window.location.href="admin.html";

        return;

    }

    alert("Email yoki parol noto'g'ri!");

}

// ===============================
// Logout
// ===============================

function logout(){

    localStorage.clear();

    window.location.href="login.html";

}

// ===============================
// Admin Check
// ===============================

function checkAdmin(){

    const role = localStorage.getItem("role");

    if(role!=="admin"){

        window.location.href="login.html";

    }

}

// ===============================
// Login Check
// ===============================

function checkLogin(){

    const logged = localStorage.getItem("logged");

    if(logged!=="true"){

        window.location.href="login.html";

    }

}

// ===============================
// Register
// ===============================

function register(){

    const username=document.getElementById("username").value;
    const email=document.getElementById("regemail").value;
    const password=document.getElementById("regpassword").value;

    if(username==="" || email==="" || password===""){

        alert("Ma'lumotlarni kiriting!");

        return;

    }

    localStorage.setItem("username",username);
    localStorage.setItem("useremail",email);
    localStorage.setItem("userpassword",password);

    alert("Ro'yxatdan o'tdingiz!");

    window.location.href="login.html";

}

// ===============================
// User Login
// ===============================

function userLogin(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(email===ADMIN_EMAIL && password===ADMIN_PASSWORD){

        login();
        return;

    }

    const savedEmail=localStorage.getItem("useremail");
    const savedPassword=localStorage.getItem("userpassword");

    if(email===savedEmail && password===savedPassword){

        localStorage.setItem("logged","true");
        localStorage.setItem("role","user");

        window.location.href="chat.html";

        return;

    }

    alert("Login yoki parol noto'g'ri!");

}

// ===============================
// Welcome
// ===============================

window.onload=function(){

    const user=localStorage.getItem("username");

    const welcome=document.getElementById("welcome");

    if(welcome && user){

        welcome.innerHTML="Assalomu alaykum, "+user+" 👋";

    }

}
function sendMessage(){

const input=document.getElementById("message");

const messages=document.getElementById("messages");

if(input.value.trim()=="") return;

messages.innerHTML+=`
<div class="user">
${input.value}
</div>
`;

messages.innerHTML+=`
<div class="ai">
⏳ Diyorbek AI javob tayyorlamoqda...
</div>
`;

messages.scrollTop=messages.scrollHeight;

input.value="";

}
