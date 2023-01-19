function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    
    
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
    // bonus
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      }); 
    })
     
  }
  toggleMenu();

  function validateForm() {
    let nome = document.forms["myForm"]["fname"].value;
    let cognome = document.forms["myForm"]["lname"].value;
    let oggettoMail = document.forms["myForm"]["emailObj"].value;
    let message = document.forms["myForm"]["message"].value;
    let regex = /^[a-zA-Z-\s]+$/;

    if (nome == "") {
      alert("Il nome non può essere vuoto");
      return false;
    }else if(regex.test(nome) == false){
      alert("Il nome non può contenire caratteri e numeri");
      return false;
    }else if(regex.test(cognome) == false){
      alert("Il cognome non può contenire caratteri e numeri");
      return false;
    }else if(cognome == ""){
      alert("Il cognome non può essere vuoto");
      return false;
    }else if(oggettoMail == ""){
      alert("Loggetto della mail non può essere vuoto");
      return false;
    }else if(oggettoMail.length > 50){
      alert("Loggetto della mail ha un max di 50 caratteri");
      return false;
    }else if(message == ""){
      alert("Il contenuto della mail non può essere vuoto");
      return false;
    }else if(message.length > 200){
      alert("Il messaggio ha un max di 200 caratteri");
      return false;
    }

    return true;
  }