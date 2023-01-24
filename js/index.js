let regiest = document.getElementById('regiest');
let categories = document.getElementById('categories');
let navMobile = document.getElementById('mobile-registary');
let navMobilecategories = document.getElementById('nav-mobile-categories');
let visa_input = document.querySelector('label[for="visa"]');
console.log(visa_input);
let visamethod = document.querySelector('#payment-method .visa');



regiest.onclick = function (){
    navMobile.classList.toggle ('show');  
}
categories.onclick = function (){
    navMobilecategories.classList.toggle ('show');  
}

visa_input.onclick = function (){
    visamethod.classList.toggle ('show');  
}



