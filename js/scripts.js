// Get the button by ID 
mybutton = document.getElementById("myBtn")
mobileBtn = $('#mobile_menu')
mobileMenu = $('.navbar-nav')
displayWindow = $(window)
allLinks = $('a')

mobileBtn.click(function() {
  if (mobileMenu.css('display') == 'none'){
    mobileMenu.css('display', 'flex')
  }
  else {
    mobileMenu.css('display', 'none')
  }
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

$(window).resize(function () { 
  if (displayWindow.width() >= 720) {
    if(mobileMenu.css('display') == 'none'){
      mobileMenu.css('display', 'flex')
    }
  }
});

allLinks.css('transition', '.35s')

$('.topBar').hover(function () {
    // over
    $(this).css({
      'backgroundColor' : '#007bff', 
      'transform' :   'scale(1.1)'})
    
  }, function () {
    // out
    $(this).css({
      'backgroundColor' : '#10273B', 
      'transform' :   'scale(1.0)'})
  }
);

