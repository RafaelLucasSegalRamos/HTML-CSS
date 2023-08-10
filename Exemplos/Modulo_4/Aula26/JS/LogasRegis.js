
var main = document.querySelector("main");
var btnregis = document.querySelector(".buttonBox.regis");
var btnlogin = document.querySelector(".buttonBox.logas");

btnregis.addEventListener("click", () => {
    main.classList.add("registra");
    main.classList.remove("login");
});

btnlogin.addEventListener("click", () => {
    main.classList.remove("registra");
    main.classList.add("login");
});