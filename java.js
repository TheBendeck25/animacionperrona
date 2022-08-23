let carro = document.querySelector(".carro")
let fondo = document.querySelector(".fondo")
let rueda = document.querySelector(".rueda")
let rueda2 = document.querySelector(".rueda2")
let particula = document.querySelector(".particula")


carro.addEventListener("click", animar)

function animar(){

    fondo.classList.add("fondoAnimado")
    rueda.classList.add("ruedaAnimada")
    rueda2.classList.add("rueda2Animada")
    particula.classList.add("particulaAnimada")

}
