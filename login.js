
let contents = document.getElementsByClassName("content");
for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener("click", function (e) {
    clickEvent(e);
  });
}
function cancelBtn() {
  document.getElementById("form").reset();
}

function closeBtn() {
  document.getElementById("top").style.display = "none";
}
function openSett() {
  document.getElementById("top").style.display = "initial";

}

function clickEvent(e) {
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.color = "black";
  }
  e.currentTarget.style.color = "green";
}
function reset() {
  document.getElementById("test").style.fontWeight = "normal";

}

const userName = document.getElementById("userName"); //username
const pass = document.getElementById("pass"); //password
const sm = document.getElementById("sm"); //submit

async function getLogin() {
  if (userName.value === "" || pass.value === "") {
    alert("Please fill in all fields");
  }
  else if (userName.value === "kminchelle" && pass.value === "0lelplR") {
    const data = await getAll()
    localStorage.setItem('Token', JSON.stringify(data.token))
    window.location.assign(`web.html`);
  } else {
    alert("Incorrect username or password");
  }
}
async function getAll() {
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
    .then(res => res.json())
}
window.onload = function () {
}

async function logOut() {
  localStorage.removeItem('Token')
  window.location.assign(`login.html`);
}