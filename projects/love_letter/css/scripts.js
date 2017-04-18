window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "test2";
    }
}


