// side menu starts
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// type js
var typed = new Typed('.type', {
    strings: ['Web designer',
     'Front-end-devloper',
     'Freelancer'
    ],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
});