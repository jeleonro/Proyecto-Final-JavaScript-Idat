let btnlogin = document.getElementById("ingresar");
let btnsalir = document.getElementById("salir");
let login = document.getElementById("login");
let consulta = document.getElementById("consulta");
let menu = document.getElementById("menu");
let retiro = document.getElementById("retiro");
let deposito = document.getElementById("deposito")
let btnretiro = document.getElementById("btnretiro");
let btnconsulta = document.getElementById("btnconsulta");
let btndeposito = document.getElementById("btndeposito");

btnconsulta.addEventListener("click",mostrar_consulta);
btnretiro.addEventListener("click",mostrar_retiro);
btndeposito.addEventListener("click",mostrar_deposito);
btnlogin.addEventListener("click",mostrar_menu);
btnsalir.addEventListener("click",mostrar_login);

function mostrar_menu() {
    menu.style.display ="block";
    retiro.style.display = "block"
    consulta.style.display="none";
    deposito.style.display = "none";
    login.style.display = "none";
}

function mostrar_login() {
    login.style.display = "block";
    retiro.style.display ="none";
    consulta.style.display="none";
    deposito.style.display = "none";
    menu.style.display = "none";
}

function mostrar_retiro() {
    menu.style.display ="block";
    retiro.style.display = "block"
    consulta.style.display="none";
    deposito.style.display = "none";
    login.style.display = "none";
}

function mostrar_consulta() {
    consulta.style.display="block";
    menu.style.display ="block";
    deposito.style.display = "none";
    login.style.display = "none";
    retiro.style.display = "none";
}

function mostrar_deposito() {
    deposito.style.display="block";
    menu.style.display ="block";
    consulta.style.display = "none";
    login.style.display = "none";
    retiro.style.display = "none";
}