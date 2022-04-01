 // popupsigninform
 function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  // checking mobile number from local Storage
  document.querySelector("form").addEventListener("submit", login);
  var reg = JSON.parse(localStorage.getItem("userCreds"));
  console.log(reg);
  
  function login()
  {
      event.preventDefault();
      var enteredMob = document.querySelector("#mob").value;
  
      for(var i=0; i<reg.length; i++)
      {
          if(reg[i].mobnum == enteredMob)
              {
                  alert("Login Success! Lets start shopping!");
                  window.location.href = "home.html";
                  break;
              }
              else
                  alert("Login Failed, please re-enter!");
      }
  }