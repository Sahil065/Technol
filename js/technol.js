/* loading header and footer*/
$( "#headerSection" ).load( "header.html",setCoverImage );
/*var str = "<nav class='w-100'> <ul class='nav-links d-flex flex-wrap  justify-content-center'>"+
    "<li><a class='nav-link' href='homePage.html'>Home</a></li>"+
    "<li><a class='nav-link' href='services.html'>Services</a></li>"+
    "<li><a class='nav-link' href='history.html'>History</a></li>"+
    "<li><a class='nav-link' href='training.html'>Training</a></li>"+
    "<li><a class='nav-link' href='about us.html'>About Us</a></li>"+
  "</ul> </nav>";
$( "#headerSection" ).after(str);
*/
$( "#footerSection" ).load( "footer.html" );

$(document).ready(function() {
    AOS.init();

    /*animation on header text*/
    var textWrapper = document.querySelector('.header-text');
    if(textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({loop: true}).add({
        targets: '.header-text .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i+1)
        }
      }).add({
        targets: '..header-text',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

      /*animation on why technol text*/
      var textWrapper = document.querySelector('.why-technol-container-text .letters');
      if(textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      }
      anime.timeline({loop: true}).add({
        targets: '.why-technol-container-text .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 1100
        }).add({
            targets: '.why-technol-container-text .letter',
            opacity: [0,1],
            translateX: [40,0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 1000,
            offset: '-=600',
            delay: function(el, i) {
                return 150 + 25 * i;
              }
            }).add({
              targets: '.why-technol-container-text',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 2000
            });

});

function setCoverImage(){
  $(".intro-container").css("background-image", "url('images/Cover/" + coverImage + "')");  
}
