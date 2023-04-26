function validate(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username=="pavan"&&password=="anuraag")
      {
        alert("login successfully");
        window.location.replace("file:///C:/Users/Sankhar/Desktop/bootcamp%20proj/main.html");
      }
  }