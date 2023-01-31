document.oncontextmenu = function(){return false;}
let regiest = document.getElementById('regiest');
let navMobile = document.getElementById('mobile-registary');
let categories = document.getElementById('categories');
let navMobilecategories = document.getElementById('nav-mobile-categories');
//////
let orderradio = document.getElementById('order-radio') || "";
let orderdiv = document.getElementById('order-div') || "";
//////
//////
let userdiv = document.getElementById('user');
let userlist = document.getElementById('user-list');
//////
let visa_input = document.querySelector('label[for="visa"]');
let visamethod = document.querySelector('#payment-method .visa');



regiest.onclick = function () {
    navMobile.classList.toggle('show');
}
categories.onclick = function () {
    navMobilecategories.classList.toggle('show');
}
orderdiv.onclick = function () {
    orderradio.classList.toggle('show');
}
userdiv.onclick = function () {
    userlist.classList.toggle('show');
}

visa_input.onclick = function () {
    visamethod.classList.toggle('show');
}


   document.oncontextmenu = function(){return false;}




