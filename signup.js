function check(){
    const s1=document.getElementById('sp').value;
    const s2=document.getElementById('cp').value;
    if(s1===s2){
        alert("successfully  registered");
        window.location.replace("file:///C:/Users/Sankhar/Desktop/bootcamp%20proj/main.html");
    }
    else{
        alert("not");
    }
}
console.log('hi');