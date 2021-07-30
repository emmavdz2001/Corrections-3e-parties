// Déclaration de la première variable de l'input
let userName = document.getElementById('userName');
// Déclaration de la deuxième variable du nom d'utilisateur attendu ( Chrys dans ce cas )
let askName = 'Chrys';

// On appelle la fonction controle quand on a entendu l'évenement 'keyup' (keyup = a la levé de la touche du clavier)  / (keypress = appuyer relaché)  /  (keydown = a la descente de la touche) /
userName.addEventListener('keyup', controle);

// Déclaration de la Fonction qui vérifie l'input utilisateur
function controle() {
    // déclaration de la variable bootstrapAlert qui récupére la div de l'id alerteBoostrap 
    let bootstrapAlert = document.getElementById('alertBoostrap');

    // Si askName est égale a la valeur de userName 
    if (askName == userName.value) {
    // Alors il affichera une bordure verte a l'input
        userName.style.border = '5px solid #0FFF00';
        // Première facon de cibler l'élément grâce a la variable bootstrapAlert
        bootstrapAlert.innerHTML = ' <div class="alert alert-success"> GOOD </div> ';
        // Deuxième facon de cibler l'élément ( alert bootstrap )
        // document.getElementById("alertBoostrap").innerHTML = ' <div class="alert alert-success"> GOOD </div> ';
    }
    else {
        userName.style.border = '5px solid #FF0000';
        bootstrapAlert.innerHTML = ' <div class="alert alert-danger"> ERREUR </div> ';
        // document.getElementById("alertBoostrap").innerHTML = ' <div class="alert alert-danger"> ERREUR </div> ';
    }
}


// Bonus ( alerte avec bibliothéque SweetAlert)
let bonus = document.getElementById('bonus');
bonus.addEventListener('click', function () {
    // alert('Pas joliejolie');
    swal({
        text: "Vraiment JolieJolie",
      });
});