function activeLink(scrollY){ //Pour mettre en évidence le lien concerné quand on survol la sectionn qu'il cible

    let links = document.querySelectorAll(".link-main");
    let sections = document.querySelectorAll("main .section-wrapper");
    console.log(sections);
    let i=0;

    links.forEach(link => {
        //On calcul la valeurs des positions en Y pour le début et la fin de la section
        let sectionTop = sections[i].offsetTop-80; //Début de la section
        let sectionBottom = sections[i].offsetHeight + sections[i].offsetTop; //Fin de la section (début section + sa hauteur)
        let offset = 150; //offset pour activer le link-active un peu plus tôt sur le prochain élément.

        if (scrollY>=sectionTop-offset && scrollY<sectionBottom-offset) { //Quand la valeur de scroll est dans la plage du lien concerné on le met en évidence avec link-active
            link.classList.add("link--active");
        } else {
            link.classList.remove("link--active");
        }

        i++

    });
}

function showNav(isHidden){

    let headerHeight=document.querySelector("header").scrollHeight-1;
    let scrollY = window.scrollY;

    activeLink(scrollY);

    if(scrollY>=headerHeight && isHidden){ //Si la barre de navigation fixe est masquée et qu'on scroll sous le header on la fait apparaitre
        let fixedNav = document.getElementById("fixedNav");
        fixedNav.classList.remove("hidden"); //On fait apparaitre la barre de navigation
        isHidden = false;
    }
    else if(scrollY<headerHeight && !isHidden){ //A l'inverse si on passe au dessus et que la barre n'est pas masquée alors on l'a masque
        let fixedNav = document.getElementById("fixedNav");
        fixedNav.classList.add("hidden");
        isHidden = true;
    }
    return isHidden;
}

//Initialisation de la barre de navigation fixe

const navInit = ()=>{

    let fixedNavIsHidden = true;

    document.addEventListener("scroll",(event)=>{

        fixedNavIsHidden = showNav(fixedNavIsHidden);

    })
    
}