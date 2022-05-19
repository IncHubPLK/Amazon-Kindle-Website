
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//the user data

const userName = document.getElementById('name'); //variables for the input fields
const email = document.getElementById('email');
const surname = document.getElementById('surname');
const passwrd = document.getElementById('password');
const cPasswrd = document.getElementById('cPassword');
const phoneNo = document.getElementById('phoneNumber');
let user = [];
const errMsg = document.getElementById('regErrMsg');


document.querySelector('#img').addEventListener("change", function(){       //listen the file input
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        sessionStorage.setItem('img', reader.result);               //store the image file in a sessionStorage
    });
    reader.readAsDataURL(this.files[0]);
});

function createUser(){          //create user data and store in an array

    event.preventDefault();
    
    if(userName.value !='' && surname.value!=''&& email.value!=''&& phoneNo.value!=''&& img.value!=''&& passwrd.value!='' &&cPasswrd!=''){  //check if the fields are not empty
        
        
        if(email.value== sessionStorage.getItem('email')){

            alert('Email already exists.');

        }else{

            if(passwrd.value == cPasswrd.value){        //checks if the new password is the same as the confirm password

                user.push(userName.value, surname.value, email.value, phoneNo.value, passwrd.value);            //store the user data into an array
                
                
                sessionStorage.setItem('name', user[0]);            //store the user data into a session storage
                sessionStorage.setItem('surname', user[1]);
                sessionStorage.setItem('email', user[2]);
                sessionStorage.setItem('phoneNo', user[3]);
                sessionStorage.setItem('passwrd', user[4]);
                
                sigInTab();         //goes to the login form tab after storing the data 
            }
            else{
                
                alert('Passwords do not match.');
            }
        }
    }
    else{
        alert('The form is incomplete!');
    }
}


const logErrMsg = document.getElementById('logErrMsg');
const userPasswd = document.getElementById('userPassword');
const userEmail = document.getElementById('userEmail');
const welcomeName = document.getElementsByClassName('welcomeName');
const ppic = document.getElementsByClassName('profileImg');

function logUser(){                 //check the user data and compare it with the data from the array
    
    if(userEmail.value != '' && userPasswd.value != ''){            //check if the fields are not empty
        if((userEmail.value != user[2]) && (userEmail.value != sessionStorage.getItem('email'))){   //validate the user data
        
            alert('Invalid email.')

        }
        else if((userPasswd.value != user[4]) && (userPasswd.value != sessionStorage.getItem('passwrd'))){
            alert('Invalid password.')
        }
        else {
            
            

            window.location.href = "index.html";
 
        }

    }
    else{
        alert('Insert your email and password.');                //return this message if the input fieldss are empty
    }
    
    event.preventDefault();

}
