$(document).ready(function() {
    var imageOptions = [
      "link/3x/1.png",
      "link/3x/2.png",
      // Agrega más opciones de imágenes aquí
    ];
    
    $("#button-guess").click(function() {
      var randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
      $(".image2").attr("src", randomImage);
      showRandomImages();
      $("#resetButton").show();
    });
    
    $("#resetButton").click(function() {
      resetGame();
    });
    
    function showRandomImages() {
      $(".image3").each(function() {
        var randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
        $(this).attr("src", randomImage);
        $(this).show();
      });
    }
    
    function resetGame() {
      $(".image2").unbind("click");
      $(".image2").attr("src", "link/3x/WHAT.png");
      $(".image3").hide();
      $("#resetButton").hide();
    }
  });
  