// Déclaration de variable de l'envoi du formulaire
let sendFormButton = document.getElementById('sendForm');
//Au clic sur le bouton appel de la fonction sendForm
sendFormButton.addEventListener('click', sendForm);
//Déclaration de la fonction
function sendForm() {
    //Récuperation des valeurs envoyées par l'utilisateur
    let shoeSizeUser = document.getElementById('shoeSize').value;
    let yearOfBirthUser = document.getElementById('yearOfBirth').value;

    // 1ere methode
    let resultOneLine = (shoeSizeUser * 2 + 5) * 50 - yearOfBirthUser + 1771;
    alert(resultOneLine);

    // 2eme methode
    let result = shoeSizeUser * 2;
    result = result + 5;
    result = result * 50;
    result = result - yearOfBirthUser;
    result = result + 1771;
    alert(result);

    // 3eme methode
    let result2 = shoeSizeUser * 2;
    result2 += 5;
    result2 *= 50;
    result2 -= yearOfBirthUser;
    result2 += 1771;
    alert(result2);
}
