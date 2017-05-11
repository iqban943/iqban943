$(function() {
  var urls = [
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1494460555788!6m8!1m7!1sNOncIebryRLg7aoHDUl8cQ!2m2!1d41.88998896664826!2d12.49252019558284!3f4.34!4f0!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1494460624792!6m8!1m7!1s50RDTeE76N0JPRXBM_WhPA!2m2!1d-77.63612426285985!2d166.4174697004275!3f198.53472111309898!4f-3.5342243718423134!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1493254828880!6m8!1m7!1sunk-stsCQwKIZOHaWjdX3Q!2m2!1d19.82977613061392!2d-155.9903332748614!3f66.64094162656981!4f-15.459928473043206!5f0.7820865974627469"
  ];

  var soundUrls = [
  "assets/crowd.mp3",
  "assets/fire.mp3",
  "assets/sea.mp3"
  ];

  var randomitem = Math.floor(Math.random() * urls.length);
  var url = urls[randomitem];
  var soundUrl = soundUrls[randomitem];

   console.log(url);
   console.log(soundUrl);

   $("iframe").attr('src', url);
   $("audio").attr('src', soundUrl);

  $(".one").delay(10000).fadeIn();
  $(".two").delay(15000).fadeIn();
  $(".three").delay(20000).fadeIn();
  $(".five").delay(22000).fadeIn();
  $(".four").delay(25000).fadeIn();
  $(".six").delay(30000).fadeIn();
  $(".seven").delay(32000).fadeIn();
  $(".eight").delay(34000).fadeIn();
  $(".nine").delay(34000).fadeIn();
  $(".ten").delay(35000).fadeIn();
  $(".eleven").delay(35000).fadeIn();
  $(".twelve").delay(37000).fadeIn();
  $(".thirteen").delay(37000).fadeIn();
  $(".fourteen").delay(38000).fadeIn();
  $(".fifteen").delay(38000).fadeIn();
  $(".sixteen").delay(38000).fadeIn();
  $(".seventeen").delay(39000).fadeIn();
  $(".eighteen").delay(39000).fadeIn();
  $(".nineteen").delay(40000).fadeIn();
  $(".twenty").delay(40000).fadeIn();
  $(".twentyone").delay(41000).fadeIn();
  $(".twentytwo").delay(41000).fadeIn();
});
