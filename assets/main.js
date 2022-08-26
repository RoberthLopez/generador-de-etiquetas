let download = document.getElementById("download")
let image = document.getElementById("image")

// Image values

let money = document.getElementById("dinero")
let qty = document.getElementById("piezas")
let size = document.getElementById("talla")
let names = document.getElementById("cliente")
let city = document.getElementById("ciudad")
let address = document.getElementById("direccion")
let phone = document.getElementById("telefono")
let observations = document.getElementById("observaciones")

// Inputs

let send = document.getElementById("enviar");
let clean = document.getElementById("resetear")
let moneyInput = document.getElementById("moneyInput")
let qtyInput = document.getElementById("qtyInput")
let sizeInput = document.getElementById("sizeInput")
let namesInput = document.getElementById("nameInput")
let addressInput = document.getElementById("addressInput")
let phoneInput = document.getElementById("phoneInput")
let observationsInput = document.getElementById("observationsInput")

// Datos capturados

clean.addEventListener("click", () => {
    event.preventDefault()
    document.getElementById("form").reset();
})

send.addEventListener("click", function(event){
    event.preventDefault()
    renderInfo()
});

const renderInfo = () => {

 money.innerText = moneyInput.value;
 qty.innerText = qtyInput.value;
 size.innerText = sizeInput.value;
 names.innerText = namesInput.value;
 address.innerText = addressInput.value;
 phone.innerText = phoneInput.value;
 observations.innerText = observationsInput.value;
}
download.addEventListener("click", () => {
    html2canvas(image)
    .then(canvas => {
        let link = document.createElement("a")
        link.download = "Descargar Guia"
        link.href = canvas.toDataURL();
        link.click();
    });  
})
