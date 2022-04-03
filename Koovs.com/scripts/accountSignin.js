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
      var o = document.getElementById("#myForm");
  
      for(var i=0; i<reg.length; i++)
      {
          console.log(reg[i].mobnum);
          console.log(enteredMob);
          if(reg[i].mobnum == enteredMob)
              {
                  var otp = document.createElement("input");
                  otp.setAttribute("type","number");
                  otp.setAttribute("id","otpnum");
                  otp.setAttribute("size",30);
                  otp.setAttribute("placeholder","Enter OTP");

                  alert("Login Success! Lets start shopping!");
                  window.location.href = "/layouts/index.html";
                  break;
              }
              else
                  alert("Login Failed, please re-enter!");
                  break;
      }
  }