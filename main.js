//Array de Cuentas
let cuentas = [
    { nombre: "Mali", saldo: 2000, password: "1234" },
    { nombre: "Gera", saldo: 1500, password: "5678" },
    { nombre: "Sabi", saldo: 60000, password: "9102" }
];

let cuentaActual = null;

//  ATRAPANDO ELEMENTOS
const btnLogin = document.getElementById("ingresar");
const btnSalir = document.getElementById("btnsalir");
const btnRetiro = document.getElementById("btnretiro");
const btnConsulta = document.getElementById("btnconsulta");
const btnDeposito = document.getElementById("btndeposito");
const btnInsertarTarjeta = document.getElementById("btninsertar");

const menu = document.getElementById("menu");
const login = document.getElementById("login");
const cajero = document.getElementById("cajero");
const retiro = document.getElementById("retiro");
const consulta = document.getElementById("consulta");
const deposito = document.getElementById("deposito");

// Loader
function mostrarLoaderDe(seccionId, callback) {
    const contenedor = document.getElementById(seccionId);
    const loader = contenedor.querySelector(".loader-container");

    loader.classList.add("active");

    setTimeout(() => {
        loader.classList.remove("active");
        callback();
    }, 1200);
}


//  MOSTRAR SECCIONES
function mostrarSeccion(seccion) {
    menu.style.display = "none";
    login.style.display = "none";
    cajero.style.display = "none";
    retiro.style.display = "none";
    consulta.style.display = "none";
    deposito.style.display = "none";

    if (seccion === "login") login.style.display = "block";
    if (seccion === "menu") menu.style.display = "block";
    if (seccion === "retiro") {
        menu.style.display = "block";
        retiro.style.display = "block";
    }
    if (seccion === "consulta") {
        menu.style.display = "block";
        consulta.style.display = "block";
    }
    if (seccion === "deposito") {
        menu.style.display = "block";
        deposito.style.display = "block";
    }
    if (seccion === "cajero") cajero.style.display = "block";
}


// INSERTAR TARJETA
btnInsertarTarjeta.addEventListener("click", () => {
    mostrarLoaderDe("cajero", () => mostrarSeccion("login"));
});


//  LOGIN: VALIDAR CLAVE
btnLogin.addEventListener("click", () => {
    let clave = document.querySelector("#login input[type=password]").value;

    cuentaActual = cuentas.find(c => c.password === clave);

    if (!cuentaActual) {
        alert("Clave incorrecta");
        return;
    }

    document.querySelectorAll(".usuario h3").forEach(t => {
        t.innerText = `Hola ${cuentaActual.nombre},`
    });

    mostrarLoaderDe("login", () => mostrarSeccion("menu"));
});


//  RETIRO
btnRetiro.addEventListener("click", () => {
    mostrarLoaderDe("menu", () => mostrarSeccion("retiro"));
});


// RETIRO MANUAL
document.querySelector("#retiro form").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.querySelector("#retiro input[type=text]");
    let monto = parseFloat(input.value);

    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido");
        return;
    }

    if (monto > cuentaActual.saldo) {
        alert("Saldo insuficiente");
        return;
    }

    cuentaActual.saldo -= monto;
    alert(`Retiro exitoso. Nuevo saldo: S/ ${cuentaActual.saldo}`);

    input.value = "";
});


// RETIROS AUTOMÁTICOS
document.querySelectorAll(".monto-retiro").forEach(btn => {
    btn.addEventListener("click", () => {
        let monto = parseFloat(btn.innerText.replace("S/", ""));

        if (monto > cuentaActual.saldo) {
            alert("Saldo insuficiente");
            return;
        }

        cuentaActual.saldo -= monto;
        alert(`Retiro exitoso de S/ ${monto}. Nuevo saldo: S/ ${cuentaActual.saldo}`);
    });
});


//  CONSULTA
btnConsulta.addEventListener("click", () => {
    mostrarLoaderDe("menu", () => {
        document.querySelector("#consulta input").value = cuentaActual.saldo;
        mostrarSeccion("consulta");
    });
});



//  DEPÓSITO
btnDeposito.addEventListener("click", () => {
    mostrarLoaderDe("menu", () => mostrarSeccion("deposito"));
});


document.querySelector("#deposito form").addEventListener("submit", function (e) {
    e.preventDefault();

    let input = document.querySelector("#deposito input.dinero");
    let monto = parseFloat(input.value);

    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido");
        return;
    }

    cuentaActual.saldo += monto;
    alert(`Depósito exitoso. Nuevo saldo: S/ ${cuentaActual.saldo}`);

    input.value = "";
});


//  SALIR
btnSalir.addEventListener("click", function () {
    const loader = document.getElementById("loader");

    document.getElementById("loader-img").src = "img/tarjeta.png";
    document.getElementById("loader-text").textContent = "Sacando tarjeta...";

    loader.classList.add("active");

    setTimeout(() => {
        loader.classList.remove("active");
        mostrarSeccion("cajero");
    }, 2300);
});

// Mostrar inicio al cargar
mostrarSeccion("cajero");
