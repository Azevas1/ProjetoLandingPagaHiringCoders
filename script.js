
function enviar(){

    let formName = document.getElementById("name").value;
    let formEmail = document.getElementById("email").value;
    let enviado =document.getElementById("enviado")
    let infos ={
        name: formName,
        Email: formEmail 
    }
     
    
    if (formName.length == 0 ){
        
        alert("Favor digitar corretamente o seu Nome")
    }
    else if(formEmail.length == 0 ){
        alert(" Favor digitar corratemente seu e-mail")

    }else{
        enviado.innerHTML = "<p> E-mail Cadastrado </p>"
    }



  let infosConvert = JSON.stringify(infos)

   localStorage.setItem('dados', infosConvert)

  
    
}


