


    // hide the quote text
    function hideQuote() {
        $('#quote-content').animate({opacity: 0}, 500);
        $('#quote-title').animate({opacity: 0}, 500);
    }

    //unhide the quote text
    function showQuote() {
        $('#quote-content').animate({opacity: 1}, 500);
        $('#quote-title').animate({opacity: 1}, 500);
    }

    // Color shift on quote change
    function generateColor() {
        var color = ["#001F3F","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#F012BE","#B10DC9","#85144B","#A1B2C3","#AAAAAA","#DDDDDD","#111111"];
        return color[(Math.floor(Math.random() * 15))];
    }

    function changeColor() {
        var c = generateColor();
        $("body").animate({backgroundColor: c}, 1500);
        $("#quote-title").animate({color: c}, 500);
        $("#quote-content").animate({color: c}, 500);
        $(".btn-social").animate({backgroundColor: c}, 500);
    }

    // get rid of garbage characters and assemble the html payload for the quote
    function cleanUpQuote(q) {
        var div = document.createElement("div");
        div.innerHTML = q["content"];
        q["content"] = '<span class="fa fa-quote-left"></span> ' + (div.textContent || div.innerText || "").trim();
        div.innerHTML = q["title"];
        q["title"] = (div.textContent || div.innerText || "").trim();
        return q;
    }

    // update the quote box with the new quote
    function updateQuoteInDOM(q) {
        $("#quote-title").text('- ' + q["title"]);
        $("#quote-content").html(q["content"]);
        // make twitter link
        $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote-content").text().trim() + " " + $("#quote-title").text().trim()));
    }

    // download a new quote and call the helper functions to update the DOM
    // TODO: add error handling
    function getANewQuote() {
        $.ajax({
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
          cache: false
      }).done(function (d){
          quote = cleanUpQuote(d.shift());
          updateQuoteInDOM(quote);
      });
    }

    function doANewQuote() {
        hideQuote();
        changeColor();
        getANewQuote();
        showQuote();
    }

    // load the first quote
    $(function () {
        doANewQuote();
    });

    // New Quote Button event handler
    $( "#new-quote" ).click(function() {
          doANewQuote();
    });
