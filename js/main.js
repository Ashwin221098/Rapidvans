let uname;

function validate() {
    uname = document.getElementById("username").value;
    let message = document.getElementById("usermsg");
    // let form = document.getElementsByClassName("form-box");
  
    if (uname == "") {
      message.style.display = "block";
      setTimeout(function () {
      message.style.display = "none";
      }, 4000);
    } 
    return uname;
  }