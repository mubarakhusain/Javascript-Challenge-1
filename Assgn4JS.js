// GO TO TOP
//Get the button:
mybutton = document.getElementById("go-to-top-img");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// GO TO TOP END


/*
Sample code

theButton = document.getElementById("test");

=> goToTopFunction(){ 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
*/

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("navbar-2");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// } 


// THIS BLOCK IS THE CONTACT NUMBER CHANGE
let countryInfo = new Map()
countryInfo.set('india', '+919999999')
countryInfo.set('usa', '+928888888')
countryInfo.set('canada', '+937777777')

var test = document.getElementById('form-select').addEventListener('change', () => {
  document.getElementById('contact').innerHTML = (countryInfo.get(document.getElementById('form-select').value));
});
// THIS BLOCK IS THE CONTACT NUMBER CHANGE END


// THIS BLOCK IS FOR THE FLAG CHANGE
// var flagImages = ['https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa'];
var country = document.getElementById('form-select').addEventListener('change', () => {
  let country = document.getElementById('form-select').value;
  document.getElementById('contact').innerHTML = countryInfo.get(country);
  
  var flagChange = document.getElementById('flag-1');
if(flagChange.src = (country == 'india')) {
  flagChange.src = "https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa";
 }
else if (flagChange.src = (country == 'usa')) {
  flagChange.src = "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png";
 }
  else 
 {
  flagChange.src = "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/canada.png";
}


});


  // document.getElementById('flag-1').src = `https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa ${country == 'india'}`
  // document.getElementById('flag-1').src = `https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png ${country == 'usa'}`
  // document.getElementById('flag-1').src = `https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa ${country == 'canada'}`
  // document.getElementById('flag-1').src = `('https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png')${country ==='canada'}`

  //  if (country == 'india') {
  //     document.querySelector('#flag-1').src = flagImages[0];
  //  }
  //  else if(country == 'usa') {
  //     document.querySelector('#flag-1').src = flagImages[1];
  //  }
  //  else {
  //     document.querySelector('#flag-1').src = flagImages[2];
  //  }
 
// THIS BLOCK IS THE FLAG CHANGE END

// STICKY NAVIGATION BAR
const nav = document.querySelector('#navbar-2');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixedNav);
// STICKY NAVIGATION BAR END