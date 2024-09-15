let navbar = document.querySelector(".navbar");
let hideTimeout;

function hideNavbar() {
  navbar.classList.add("navbar-hidden");
}

function showNavbar() {
  navbar.classList.remove("navbar-hidden");
}

function resetHideTimeout() {
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(hideNavbar, 3000);
}

window.addEventListener("mousemove", () => {
  showNavbar();
  resetHideTimeout();
});

window.addEventListener("touchstart", () => {
  showNavbar();
  resetHideTimeout();
});

window.addEventListener("touchmove", () => {
  showNavbar();
  resetHideTimeout();
});

window.addEventListener("scroll", () => {
  showNavbar();
  resetHideTimeout();
});

// Login Function Verification
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
  
    const correctUsername = "Gasha";
    const correctPassword = "Pratama";
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if(username == correctUsername && password == correctPassword){
        alert("Login Berhasil")
        window.location.href = 'index.html';
    }else{
        alert("Username atau password salah")
    }
  });




