$(document).ready(function(){
  //Livereload for Local Development
  if (window.location.href.indexOf("local") > -1) {
	$('head').append('<script src="http://localhost:35729/livereload.js"></script>');
  }
});