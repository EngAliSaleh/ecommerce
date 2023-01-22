let regiest = document.getElementById('regiest');
let navMobile = document.getElementById('mobile-categories');
let visa_input = document.getElementsByClassName('visa');
let visamethod = document.getElementById('payment-method');



regiest.onclick = function (){
    navMobile.classList.toggle ('show');  
}

visa_input.onclick = function (){
    visamethod.classList.toggle ('show');  
}



