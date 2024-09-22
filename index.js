// Quantity input field

var minus_A = document.querySelector("#decrement-button")
var add_A = document.querySelector("#increment-button");
var quantity_A = document.querySelector("#quantity-input");
var qtyMin = parseInt(quantity_A.getAttribute("min"));

minus_A.addEventListener("click", function(){
    quantity_A.value--;
    if(quantity_A.value <= 0) {
      console.log('dd', quantity_A.getAttribute("min"), qtyMin);
      minus_A.setAttribute("disabled", '');
    }
});

add_A.addEventListener("click", function() {
    quantity_A.value++;
    if(quantity_A.value > 0) {
      console.log('dd', quantity_A.getAttribute("min"), qtyMin);
      minus_A.removeAttribute("disabled");
    } 
});


// Services Slide

var swiper = new Swiper(".servSlide", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  
slidesPerView: 2.3,
spaceBetween: 24,
  pagination: false,
  mousewheel: true,
  keyboard: true,
});


// Certification Slide

var swiper = new Swiper(".crfSlide", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
slidesPerView: 2.8,
spaceBetween: 24,
  pagination: false,
  mousewheel: true,
  keyboard: true,
});



// Select dropdown

const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownSelectedOption = document.getElementById("dropdown-selected-option");
const caret = document.getElementById("caret");

function toggleCaret(){
  caret.style.transform =='rotate(0deg)'? caret.style.transform ='rotate(180deg)':caret.style.transform ='rotate(0deg)';
}

dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation();

  toggleCaret();
  dropdownMenu.classList.toggle("hidden");
  dropdownButton.setAttribute("aria-expanded", dropdownMenu.classList.contains("hidden") ? "false" : "true");
});

// Add placeholder text to list items
const dropdownItems = dropdownMenu.querySelectorAll("[role='menuitem']");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownSelectedOption.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownButton.setAttribute("aria-expanded", "false");
      toggleCaret();

  });
});

// Dismiss dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  if (!dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
    dropdownButton.setAttribute("aria-expanded", "false");
    caret.style.transform = 'rotate(0deg)';
  }
});


