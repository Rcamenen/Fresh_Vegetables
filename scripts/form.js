//Afficher le popup avec le message
function showPopup(message){

    let popupCard = document.querySelector(".popup-card");
    let popupWrapper = document.querySelector(".popup-wrapper");

    popupCard.appendChild(message);
    popupWrapper.classList.remove("hidden");

    //Une fois la popup affichée, on écoute l'evènement pour sa fermeture

    function closePopup(){

        popupWrapper.addEventListener("click",(event)=>{
    
            if (event.target===popupWrapper) { // Pour que le popup se ferme au click sur le background et non sur la card ou apparait le message.
                popupWrapper.classList.add("hidden");
                popupCard.textContent="";
            }
    
        })
    }

    closePopup();

}


//Effacer le formulaire

function clearForm(formInputs){
    formInputs.forEach(input => {
        input.value="";
    });
}


//Initialisation gestion formulaire

function formInit(){

    let contactForm = document.querySelector("#contact-section form");

    contactForm.addEventListener("submit",(event)=>{
    
        event.preventDefault(); //On empêche le rechargement de la page
    
        //Création du message de confirmation

        let name = document.getElementById("name");

        const confirmation = document.createElement("p");
        confirmation.textContent = `Bonjour ${name.value}, votre message a bien été envoyé !`
    
        //Affichage du message de confirmation

        showPopup(confirmation);
    
        //Clear des inputs du formulaire

        let formInputs = document.querySelectorAll("#contact-section .input");
        clearForm(formInputs);
    
    })

}


