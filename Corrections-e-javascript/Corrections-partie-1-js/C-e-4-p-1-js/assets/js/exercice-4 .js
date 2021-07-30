// Déclaration de la variable qui stock le boutton
let validButton = document.getElementById('validButton');
// Première façon d'appeler la fonction ( fonction nominative )
validButton.addEventListener('click', controle);

function controle() {
    let firstName = document.getElementById('input-firstName').value;
    let lastName = document.getElementById('input-lastName').value;
    let city = document.getElementById('input-city').value;
    alert(`Nom : ${lastName} \nPrénom : ${firstName} \nVille : ${city}`);
}

// Deuxième façon d'appeler la fonction ( fonction anonyme )
validButton.addEventListener('click', function(){
    let firstName = document.getElementById('input-firstName').value;
    let lastName = document.getElementById('input-lastName').value;
    let city = document.getElementById('input-city').value;
    alert(`Nom : ${lastName} \nPrénom : ${firstName} \nVille : ${city}`);
});