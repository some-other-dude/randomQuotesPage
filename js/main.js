var imgUrl = 'http://bking39116-webdev.s3.amazonaws.com/randomQuotes/img/dan-carlson-141263-bg.jpg';



$('img#beacon').load( function(){
  console.log('loaded');
}).attr('src', imgUrl);

$('body').css('background-image', 'url(' + imgUrl + ')');



{ // begin quote fetch scope

function cleanUpQuote(q) {

    var div = document.createElement("div");
    div.innerHTML = q["content"];
    q["content"] = (div.textContent || div.innerText || "").trim();
    div.innerHTML = q["title"];
    q["title"] = (div.textContent || div.innerText || "").trim();
    return q;
}

function updateQuoteInDOM(q) {
    $("#quote-title").text(q["title"]);
    $("#quote-content").html(q["content"]);
}

function doANewQuote() {
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      cache: false
  }).done(function (d){
      quote = cleanUpQuote(d.shift());
      updateQuoteInDOM(quote);



  });
}

doANewQuote();


} // end quote fetch scope

// function retrieveNewQuote() {
//     $.ajax( {
//       url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//       success: function(data) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//       },
//       cache: false
//       return post;
//     });
// }
//
// function newQuote() {
//      var quote = retrieveNewQuote();
//
//
// }
//
// function postQuote() {
//     var q = newQuote();
//     $('.quote-source').text(q.title);
//     $('.quote-text').html(q.content);
// }
//
// $('#get-another-quote-button').on('click', function(e){
//     postQuote();
// });
//
// postQuote();
