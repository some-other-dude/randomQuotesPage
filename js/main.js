var imgUrl = 'http://bking39116-webdev.s3.amazonaws.com/randomQuotes/img/dan-carlson-141263-bg.jpg';


$('img#beacon').load( function(){
  console.log('loaded');
}).attr('src', imgUrl);

$('body').css('background-image', 'url(' + imgUrl + ')');
