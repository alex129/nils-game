$(document).ready(function () {
  const folder = "link/3x/random/";
  const totalImages = 9;
  var imageOptions = [
    "link/3x/1.png",
    "link/3x/2.png",
    // Agrega más opciones de imágenes aquí
  ];

  $("#button-what").click(function () {
    showRandomImages();
  });

  $("#button-reset").click(function () {
    resetGame();
  });

  function showRandomImages() {
    const randomImageIndex = Math.floor(Math.random() * totalImages) + 1;
    var imageArtistSource = folder + randomImageIndex + ".png";
    var imageFolderSource = folder + randomImageIndex + "_title.png";
    $(".img-artist").show();
    $(".img-artist").attr("src", imageArtistSource);
    $(".img-what").attr("src", imageFolderSource);
    $("#button-reset").show();
  }

  function resetGame() {
    console.log("Reset game");
    $(".img-artist").hide();
    $(".img-what").attr("src", "link/3x/WHAT.png");
    $("#button-reset").hide();
  }
});
