$(document).ready(function() {
  $('.typer').animate({visibility: "visible"});
  $('.typer').typeIt({
        speed: 120,
        autostart: true,
        startDelay: 600,
	});




  $(".icon-menu").click(function() {
    if ($(".close").css('opacity') == 0) {
      $(".menu").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 500);
      $(".close").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".bars").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    } else {
      $(".menu").css({visibility: "hidden", opacity: 1}).animate({visibility: "hidden", opacity: 0}, 500);
      $(".bars").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".close").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    }
  });

  // $(".typer").delay(6200).animate({"font-size":"48px", "top": "70%", "left": "2%"});
  $(".typer").delay(6500).css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 500);
  $(".name").delay(6950).css({opacity: 0, visibility: "visible"}, 600).animate({opacity: 1}, 3500);
  // $("hr").delay(1000).animate({opacity:0}, 300);
  $(".menu-not-home").click(function() {
    $(".home-stuff").animate({opacity: 0}, 500);
    $(".home-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $("hr").animate({"width": "75%"}, 600);
    $(".bg").delay(600).animate({"height": "78%"}, 600)
  });

  $("#home").click(function() {
    location.reload();
  });

  $("#about").click(function() {
    //hiding everything else
    $(".experiences-stuff").animate({opacity: 0}, 500);
    $(".portfolio-stuff").animate({opacity: 0}, 500);
    $(".contact-stuff").animate({opacity: 0}, 500);
    $(".experiences-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".portfolio-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".contact-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    //making about page show up
    $(".about-stuff").css({visibility: "visible", opacity: 0}).delay(800).animate({visibility: "visible", opacity: 1}, 500);
    $("#about-title").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".random-fact-div").delay(2200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $("#intro").delay(2000).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $("#about-pic").delay(2000).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);

  });


  $("#experiences").click(function() {
    //hiding everything else
    $(".about-stuff").animate({opacity: 0}, 500);
    $(".portfolio-stuff").animate({opacity: 0}, 500);
    $(".contact-stuff").animate({opacity: 0}, 500);
    $(".about-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".portfolio-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".contact-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    //making about page show up
    $(".experiences-stuff").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 500);
    $("#experiences-title").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".exp-appear").delay(2000).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);

  });
  $("#skills-experiences").click(function() {
    $(".a").animate({opacity: 0}, 1000);
    $(".b").animate({opacity: 0}, 1000);
    $(".c").animate({opacity: 0}, 1000);
    $(".d").animate({opacity: 0}, 1000);
    $("#click-one").animate({opacity: 0}, 1000);
    $(".skill-option").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1});
    $(".skill-list1").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".skill-list2").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".skill-bars3").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 2000);
    $(".skill-bars1").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 2000);
    $(".skill-bars2").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 2000);
  });
  $("#professional-experiences").click(function() {
    $(".d").animate({opacity: 0}, 1000);
    $(".b").animate({opacity: 0}, 1000);
    $(".c").animate({opacity: 0}, 1000);
    $(".e").animate({opacity: 0}, 1000);
    $("#click-one").animate({opacity: 0}, 1000);
    $(".professional-option").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1});
    $(".prof-titles").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
    $(".prof-sec").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
  });

    $("#leadership-experiences").click(function() {
      $(".a").animate({opacity: 0}, 1000);
      $(".d").animate({opacity: 0}, 1000);
      $(".c").animate({opacity: 0}, 1000);
      $(".e").animate({opacity: 0}, 1000);
      $("#click-one").animate({opacity: 0}, 1000);
      $(".leadership-option").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1});
      $(".left-col").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
      $(".lead-sec").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
    });

    $("#project-experiences").click(function() {
      $(".a").animate({opacity: 0}, 1000);
      $(".b").animate({opacity: 0}, 1000);
      $(".d").animate({opacity: 0}, 1000);
      $(".e").animate({opacity: 0}, 1000);
      $("#click-one").animate({opacity: 0}, 1000);
      $(".project-option").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1});
      $(".proj-title").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
      $(".proj-sec").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
    });
    $("#programs-experiences").click(function() {
      $(".a").animate({opacity: 0}, 1000);
      $(".b").animate({opacity: 0}, 1000);
      $(".c").animate({opacity: 0}, 1000);
      $(".e").animate({opacity: 0}, 1000);
      $("#click-one").animate({opacity: 0}, 1000);
      $(".program-option").css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1});
      $(".program-title").delay(400).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
      $(".prog-sec").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1500);
    });


  $("#portfolio").click(function() {


    $(".about-stuff").animate({opacity: 0}, 500);
    $(".experiences-stuff").animate({opacity: 0}, 500);
    $(".contact-stuff").animate({opacity: 0}, 500);
    $(".about-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".experiences-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".contact-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    //
    $(".portfolio-stuff").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 500);
    $("#portfolio-title").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);

  //   $(window).load(function(){
  //     $('.fotorama').fotorama({
  //         width: 1000, // Width of container
  //         height: 600, // Height of container
  //         startImg: 10, // Initial image
  //         transitionDuration: 400, // Duration of transitio
  //         touchStyle: true, // Enable dragging
  //         margin: 10, // Margin between images
  //         arrowsColor: '#3399cc', // Arrows color
  //         thumbSize: 50, // Thumb size (height)
  //         thumbBorderWidth: 1, // Thumb border width
  //         caption: true, // Display captions
  //     });
  // });

    var $slide = $('.slide'),
      $slideGroup = $('.slide-group'),
      $bullet = $('.bullet');

    var slidesTotal = ($slide.length - 1),
        current = 0,
        isAutoSliding = true;

    $bullet.first().addClass('current');

    var clickSlide = function() {
      //stop auto sliding
      window.clearInterval(autoSlide);
      isAutoSliding = false;

      var slideIndex = $bullet.index($(this));

      updateIndex(slideIndex);
    };

    var updateIndex = function(currentSlide) {
      if(isAutoSliding) {
        if(current === slidesTotal) {
          current = 0;
        } else {
          current++;
        }
      } else {
          current = currentSlide;
      }

      $bullet.removeClass('current');
      $bullet.eq(current).addClass('current');

      transition(current);
    };

    var transition = function(slidePosition) {
        $slideGroup.animate({
          'top': '-' + slidePosition + '00%'
        });
    };

    $bullet.on( 'click', clickSlide);

    var autoSlide = window.setInterval(updateIndex, 2000);

  });


  $("#contact").click(function() {
    //hiding everything else
    $(".experiences-stuff").animate({opacity: 0}, 500);
    $(".portfolio-stuff").animate({opacity: 0}, 500);
    $(".about-stuff").animate({opacity: 0}, 500);
    $(".experiences-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".portfolio-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $(".about-stuff").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    //making about page show up
    $(".contact-stuff").delay(900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 500);
    $("#contact-title").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".contact0").delay(1200).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 3200);
    $(".contact1").delay(2000).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".contact2").delay(2300).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".contact3").delay(2600).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);
    $(".contact4").delay(2900).css({visibility: "visible", opacity: 0}).animate({visibility: "visible", opacity: 1}, 1000);


  });
  $(".gmailspan").click(function() {
    if ($(".r1").css('opacity') == 1) {
      $(".l1").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".r1").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    } else {
      $(".r1").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".l1").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    }
  });
  $(".linkedinspan").click(function() {
    if ($(".r2").css('opacity') == 1) {
      $(".l2").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".r2").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    } else {
      $(".r2").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".l2").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    }
  });
  $(".facebookspan").click(function() {
    if ($(".r3").css('opacity') == 1) {
      $(".l3").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".r3").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    } else {
      $(".r3").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".l3").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    }
  });
  $(".instagramspan").click(function() {
    if ($(".r4").css('opacity') == 1) {
      $(".l4").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".r4").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    } else {
      $(".r4").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
      $(".l4").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
    }
  });




//drawing out my name of the front page
  var ctx = document.querySelector("canvas").getContext("2d"),
      dashLen = 220, dashOffset = dashLen, speed = 10,
      txt = " Sharon", x = 30, i = 0;


  ctx.font = "100px Mrs Saint Delafield, cursive, TSCu_Comic, sans-serif";
  ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
  ctx.strokeStyle = ctx.fillStyle = "#6E6E6E";
  ctx.imageSmoothingEnabled = false;
//F9EDF7
  setTimeout(function() {
    (function loop() {
      if (i == 0) {ctx.clearRect(x, 0, 60, 150);}
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
      dashOffset -= speed;                                         // reduce dash length
      ctx.strokeText(txt[i], x, 90);                               // stroke letter

      if (dashOffset > 0) requestAnimationFrame(loop);             // animate
      else {
        ctx.fillText(txt[i], x, 90);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();
  }, 7200);


});
