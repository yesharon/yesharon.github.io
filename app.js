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
    $(".everything").animate({opacity: 0}, 500);
    $(".everything").delay(500).css({visibility: "hidden"}).animate({visibility: "hidden"});
    $("hr").animate({"width": "75%"}, 600);
    $(".bg").delay(600).animate({"height": "78%"}, 600)
  });

  $("#home").click(function() {
    location.reload();
  });


  var ctx = document.querySelector("canvas").getContext("2d"),
      dashLen = 220, dashOffset = dashLen, speed = 10,
      // txt = " Sharon", x = 30, i = 0;
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
