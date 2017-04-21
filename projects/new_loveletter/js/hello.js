// $(function() {
//     $(window).scroll(function() {
//         var body = $('body');
//         var scrollTop = body.scrollTop();

//         console.log(scrollTop);

//         if ( scrollTop > $('.background5').offset().top ) {
//             $('#myP').addClass('').addClass('test5');
//         } else if ( scrollTop > $('.background4').offset().top ) {
//             $('#myP').addClass('').addClass('test4');
//         } else {
//             $('#myP').addClass('');
//         }
//     });
// })

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        document.getElementById("myP").className = "test5";
    } else if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
                document.getElementById("myP").className = "test4";
    } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                document.getElementById("myP").className = "test3";
    } else if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                document.getElementById("myP").className = "test2";
    } else {
      document.getElementById("myP").className = "test";
    }
    }

