
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
        $("#quote-title").text('-' + q["title"]);
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

    $( "#new-quote-button" ).click(function() {
          doANewQuote();
    });

} // end quote fetch scope
