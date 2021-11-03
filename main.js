// Definimos la variable y clases

let addPrestamo = document.getElementById("cargarPrestamo");


class Prestamo {
    constructor (id,documento,nombre,apellido,monto,tasa,plazo) {
        this.id = id;
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.monto = parseFloat (monto);
        this.tasa = parseFloat (tasa);
        this.plazo = parseFloat (plazo);
        this.montoTotal = parseFloat (0);
        this.cuota = parseFloat (0);
    }
    obtenerMontoFinal(){
        this.montoTotal = parseFloat(this.monto + (this.monto*this.tasa*this.plazo)/100);
    }
    calcularCuota () {
        this.cuota = this.montoTotal / this.plazo;
    }
} 

// Definimos funciones

function cargarPrestamo() {
    let doc = document.getElementById("documento").value;
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let mon = parseInt(document.getElementById("monto").value);
    let tas = parseFloat(document.getElementById("tasa").value);
    let pla = parseInt(document.getElementById("plazo").value);
    let idPrestamo = localStorage.length + 1;
    const auxPrestamo = new Prestamo (idPrestamo,doc,nom,ape,mon,tas,pla);
    auxPrestamo.obtenerMontoFinal();
    auxPrestamo.calcularCuota();    
    const jsonPrest = JSON.stringify(auxPrestamo);
    localStorage.setItem(idPrestamo,jsonPrest);
}

function consultarPrestamos () {
    for (let i = 1; i <= localStorage.length; i++) {
        let datos = localStorage.getItem(i);
        let contenedor = document.createElement("div"); 
        contenedor.innerHTML = `<H4>Datos del prestamo cargado</H4>
                                <p> ${datos} </p>`;
        document.body.appendChild(contenedor);
    };    
    }

// Ejecucion

addPrestamo.addEventListener("click",()=>{
    cargarPrestamo();
})

consultarPrestamos();