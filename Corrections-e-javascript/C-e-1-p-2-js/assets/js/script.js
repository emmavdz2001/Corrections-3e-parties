var img = document.getElementById("img");
img.addEventListener("mouseover" , setOnImage);
img.addEventListener("mouseout" , setOffImage);

function setOnImage() {
    img.src="assets/img/illustration-chien-levitation.jpg";
    img.alt="Illustration d'un chien en lévitation";
}
function setOffImage() {
    img.src="assets/img/illustration-chien-couche.jpg";
    img.alt="Illustration d'un chien couché";
}