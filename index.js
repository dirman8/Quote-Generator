const globalObj = {};

document.addEventListener("DOMContentLoaded", function() {
  //Fetching All Quotes (json)
  (async () => {
    let quotesFetching = await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json");
    
    if (quotesFetching.ok) {
      let json = await quotesFetching.json();
      
      function calcIndex () {
        console.log(json.length)
          let index = Math.round(Math.random() * json.length);
          return index
        }

      let quoteIndex = calcIndex();
        console.log(quoteIndex);

      let quote = json[quoteIndex].text;
      let author = json[quoteIndex].author;

      showQuote(quote, author);
      makeTweetableText(quote);

    } else {
      alert("HHTP Errors:" + quotesFetching.status);
    }
  })();

  
})

function showQuote(quote, author) {
    let quoteTag = document.getElementById("quoteText");
    let insertQuote = document.createTextNode(quote);
     quoteTag.appendChild(insertQuote);

    let authorTag = document.getElementById("author");
    let insertAuthor = document.createTextNode(author);
    authorTag.appendChild(insertAuthor);
}

function makeTweetableText(quote) {
  const currentPageUrl = window.location.href;
  const tweetableText = "https://twitter.com/intent/tweet?url=" + currentPageUrl + "&text=" + encodeURIComponent(quote);
  globalObj.link = tweetableText;
}

function onClickToTweet(e) {
    //  e.preventDefault();
     window.open(
          globalObj.link,
          "twitter.window",
          "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbar=0"
     );
}

