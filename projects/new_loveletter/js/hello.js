window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("myP").className = "test2";
    } else {
      document.getElementById("myP").className = "test";
    }
    }

