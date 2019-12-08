function myFunction() {
    var x = document.getElementById("bottom-nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function iconNav(){
      var y = document.querySelectorAll("a.nav-icon-one");
      if(x.className = "nav-icon-one"){
          y.className += " mobile-nav-icon"
      } else{
          y.className = "nav-icon-one"
      }
  }