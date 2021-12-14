


function validation(){
    let username = document.forms["form"]["username"].value.trim();
    let email = document.forms["form"]["email"].value.trim()
    let message= document.forms["form"]["message"].value.trim();
    var usernameStatus=true;
    var emailStatus=true;
    var messageStatus=true;
    
  
    //validate length of username
    if(username.length < 2 ){
        
        document.getElementById("usernameError").innerHTML = "*Please enter 2 or more characters";
        usernameStatus= false;
    }
   
    
    //validate characters of  text input
    var  alphabets = /^[a-z]+$/i;
    if(!(username.match(alphabets))){
        document.getElementById("usernameError").innerHTML = "*Please use alphabets (A-Z/a-z) only ";
        usernameStatus= false;
    }
        //validate length of message
        if(message.length < 2 ){
            document.getElementById("messageError").innerHTML = "*Please enter 2 or more characters";
            messageStatus= false;
        }
       
 
    //validate email
    
     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     emailStatus= regex.test(String(email).toLowerCase());
     if (emailStatus==false){
        document.getElementById("emailError").innerHTML = "*Please enter valid email address";
     }
    
    
    //validate all text inputs are filled
    var finalStatus=usernameStatus&&messageStatus&&emailStatus;
    return finalStatus;
    }

