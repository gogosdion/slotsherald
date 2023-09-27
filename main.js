function myFunction() {
  
    var more = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (more.style.display === "none") {
      more.style.display = "block";
      btnText.innerHTML = "Less info -";
      
    } else {
      more.style.display = "none";
      btnText.innerHTML = "More info +";
      
    }
  }