

const redColor = document.querySelector(".red");  /* me busca todo lo que tenga la .clase red en el documento index.html */ 
const blackColor = document.querySelector(".black"); /* querySelector me permite buscar lo que sea, no tiene por qué ser una clase */
const grayColor = document.getElementsByClassName(".gray");

const cartButton = document.getElementById("button"); /* creo una constante para referirme al botón de agregar al carrito y la busco a través de su ID*/
const itemTag = document.querySelector("h3");  /* creo una constante para referirme al cuadradito donde pone CARRO */

const imgCard = document.querySelector(".product-image"); /* creo una constante para seleccionar la clase .product-image, que es donde sale la foto del coche */

redColor.addEventListener("click", function(){ /*le digo que añada un evento de escucha a la constante redColor, que se activará cuando le haga click (ese es el evento en sí) y le digo cómo reaccionar a ello con una función */
    imgCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")'; /*le digo que acceda a los estilos de la imgCard, específicamente a la imagen de fondo, y la cambio por la nueva imagen diciéndole la ruta(url) donde la tengo  */
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
});

blackColor.addEventListener("click", () => { 
    imgCard.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
});

grayColor.addEventListener("click", () => { 
    imgCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
});

