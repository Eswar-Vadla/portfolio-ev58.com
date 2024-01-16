function showCert() {
    document.getElementById('certifications').style.display = "flex"
}

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    });
});

// contact form connection to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxV9Lm1kI3xy0whpRS3tMqxOCB2OoiYtMPV15UeUbvbrYPYgj64ZV7mJ3ZJKWrd2PVEzQ/exec'
const form = document.forms['contact-me']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})