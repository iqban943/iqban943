window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myP").className = "test2";
    } else {
      document.getElementById("myP").className = "test";
    }
    }

