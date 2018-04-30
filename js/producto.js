//initiate the plugin and pass the id of the div containing gallery images
$("#zoom").elevateZoom({gallery:'gallery', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', scrollZoom : true}); 

//pass the images to Fancybox
$("#zoom").bind("click", function(e) {  
  var ez = $('#zoom').data('elevateZoom');
	$.fancybox(ez.getGalleryList());
  return false;
});

$(".gallery a").click(function(e) {
  var src = $(this).attr('data-image');
  console.log(src);
  $("#zoom").attr('src', src);
});
