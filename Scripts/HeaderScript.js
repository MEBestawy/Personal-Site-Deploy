/* Script for the header components */

const adjustMenuBackZVal = () => {
  if (window.pageYOffset > window.innerHeight) {
    $("#MenuBack").css("zIndex", "6");
  } else {
    $("#MenuBack").css("zIndex", "5");
  }
};

// Tracking scroll position
var prevScrollpos = window.pageYOffset;

// Continuously check if menu is loaded, then react appropriately
var menuMakingInterval = setInterval(() => {
  // Check if both buttons are loaded
  if ($("#HomeBtn")[0] && $("#ResumeBtn")[0]) {
    // Highlight the appropriate button depending on current page
    if (document.URL.toLowerCase().includes("resume")) {
      $("#ResumeBtn")[0].classList.add("ChosenOpt");
    } else {
      $("#HomeBtn")[0].classList.add("ChosenOpt");
    }

    adjustMenuBackZVal();

    // Element highlighted, no need to check anymore
    clearInterval(menuMakingInterval);
  }
}, 100);

// Reacting to user scrolling
$(window).scroll(function () {
  // Tracking current scrolling position
  var currentScrollPos = window.pageYOffset;

  // Making sure user did not over-scroll upward
  if (currentScrollPos >= 0) {
    // Checking is user is scrolling up or down
    if (prevScrollpos >= currentScrollPos) {
      // User scrolling up
      $("#MobileToggle").addClass("ScrollUpToggleMenu");
      $("#HeaderMenu").addClass("ScrollUpPageMenu");
      $("#MenuBack").addClass("ScrollUpPageMenu");
      $("#MobileToggle").removeClass("ScrollDownMenu");
      $("#HeaderMenu").removeClass("ScrollDownMenu");
      $("#MenuBack").removeClass("ScrollDownMenu");
    } else {
      // User scrolling down
      $("#MobileToggle").addClass("ScrollDownMenu");
      $("#HeaderMenu").addClass("ScrollDownMenu");
      $("#MenuBack").addClass("ScrollDownMenu");
      $("#MobileToggle").removeClass("ScrollUpToggleMenu");
      $("#HeaderMenu").removeClass("ScrollUpPageMenu");
      $("#MenuBack").removeClass("ScrollUpPageMenu");
    }

    adjustMenuBackZVal();

    // Tracking scroll position
    prevScrollpos = currentScrollPos;
  }
});

// Detect if bar menu is clicked
$(document).on("click", "#MobileToggle", function (e) {
  // Check if menu is openned or closed
  if ($("#MobileToggle").hasClass("MenuClosed")) {
    // Open menu
    $("#MobileToggle").addClass("FreezeOnScreen");
    $("#MobileToggle").addClass("CancelMenu");
    $("#SideMenu").addClass("ActiveSideMenu");
    $("#SideMenu").removeClass("InactiveSideMenu");
  } else {
    //Close menu
    $("#MobileToggle").removeClass("FreezeOnScreen");
    $("#MobileToggle").removeClass("CancelMenu");
    $("#SideMenu").removeClass("ActiveSideMenu");
    $("#SideMenu").addClass("InactiveSideMenu");
  }

  // Adjusting elements
  $("#MenuBack").toggleClass("HideOnMobile");
  $("#HeaderMenu").toggleClass("HideOnMobile PressedMenu");
  $("#MobileToggle").toggleClass("MenuClosed MenuOpened");
});
