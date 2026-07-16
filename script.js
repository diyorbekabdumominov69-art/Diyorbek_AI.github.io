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
window.addEventListener("load",()=>{

const name=document.getElementById("profileName");
const email=document.getElementById("profileEmail");
const role=document.getElementById("roleText");

if(name){

name.innerHTML=localStorage.getItem("username") || "Admin";

}

if(email){

email.innerHTML=localStorage.getItem("email") || localStorage.getItem("useremail");

}

if(role){

role.innerHTML=localStorage.getItem("role");

}

});
function buyPremium(){

alert("Premium to'lov tizimi keyingi versiyada qo'shiladi.");

}
function generateImage(){

const prompt=document.getElementById("imagePrompt").value.trim();

if(prompt===""){

alert("Rasm tavsifini kiriting!");

return;

}

alert(
"Hozircha demo.\n\nKeyinchalik AI rasm generator ulanadi."
);

}
function saveSettings(){

const lang=document.getElementById("language").value;
const notify=document.getElementById("notify").checked;

localStorage.setItem("language",lang);
localStorage.setItem("notify",notify);

alert("Sozlamalar saqlandi.");

}

function toggleTheme(){

alert("Light Mode keyingi versiyada qo'shiladi.");

}
// Chat tarixini saqlash
function saveHistory(message){

let history=JSON.parse(localStorage.getItem("history"))||[];

history.push(message);

localStorage.setItem("history",JSON.stringify(history));

}

// Chat tarixini yuklash
function loadHistory(){

const box=document.getElementById("historyBox");

if(!box) return;

let history=JSON.parse(localStorage.getItem("history"))||[];

if(history.length===0){

box.innerHTML="<p>Hozircha tarix yo'q.</p>";

return;

}

box.innerHTML="";

history.forEach(msg=>{

box.innerHTML+=`
<div class="history-item">
${msg}
</div>
`;

});

}

// Tarixni o'chirish
function clearHistory(){

localStorage.removeItem("history");

location.reload();

}
let recognition;

function startVoice(){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(!SpeechRecognition){

alert("Brauzeringiz Voice Chatni qo'llab-quvvatlamaydi.");

return;

}

recognition = new SpeechRecognition();

recognition.lang="uz-UZ";

recognition.start();

document.getElementById("voiceStatus").innerHTML=
"🎤 Tinglanmoqda...";

recognition.onresult=function(event){

const text=event.results[0][0].transcript;

document.getElementById("voiceStatus").innerHTML=
"Siz aytdingiz: "+text;

};

}

function stopVoice(){

if(recognition){

recognition.stop();

}

document.getElementById("voiceStatus").innerHTML=
"⏹ To'xtatildi.";

}
function loadUsers(){

const table=document.getElementById("usersTable");

if(!table) return;

const username=localStorage.getItem("username") || "Admin";
const email=localStorage.getItem("useremail") || ADMIN_EMAIL;
const role=localStorage.getItem("role") || "admin";

table.innerHTML=`
<tr>
<td>${username}</td>
<td>${email}</td>
<td>${role}</td>
<td>🟢 Online</td>
</tr>
`;

}
function loadStats(){

const users = localStorage.getItem("username") ? 1 : 0;

const history = JSON.parse(localStorage.getItem("history")) || [];

const premium = localStorage.getItem("premium") === "true" ? 1 : 0;

document.getElementById("usersCount").innerText = users;
document.getElementById("messagesCount").innerText = history.length;
document.getElementById("premiumCount").innerText = premium;
document.getElementById("onlineCount").innerText = users;

}
const answers = {
  "salom": "Assalomu alaykum! 😊",
  "isming nima": "Men Diyorbek AI.",
  "xayr": "Xayr! Yana kutaman."
};

function sendMessage() {
  const input = document.getElementById("message");
  const text = input.value.trim().toLowerCase();

  if (!text) return;

  const messages = document.getElementById("messages");

  messages.innerHTML += `<div class="user">${text}</div>`;

  const reply = answers[text] || "Kechirasiz, bu savolga javob bera olmayman.";

  messages.innerHTML += `<div class="ai">${reply}</div>`;

  input.value = "";
}
