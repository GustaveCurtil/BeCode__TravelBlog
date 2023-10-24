    /*vouwsysteem*/
    function openVouwen1() {
        var x = document.getElementById("individueel");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      }

      function openVouwen2() {
        var x = document.getElementById("groeps");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      }
      
      function openVouwen3() {
        var x = document.getElementById("organisaties");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      }

  /*scrollen naar top functie*/
      let mybutton = document.getElementById("naarBoven");

      function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
  