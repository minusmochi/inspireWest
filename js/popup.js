var kanyeRest = (function () {
    var baseUrl = "https://api.kanye.rest";

    return {
        get: function () {
            return new Promise((resolve, reject) => {
                var req = new XMLHttpRequest();
                req.addEventListener('load', function () {
                    resolve(JSON.parse(this.responseText));
                });
                req.open("GET", baseUrl);

                req.send();
            });
        }
    };
})();

function GetQuote() {
    var ele = document.getElementById('quote');

    kanyeRest
        .get()
        .then((quote) => {
            console.log(quote);
            ele.innerHTML = "<p>" + quote.quote + "</p>";
        });
}

document.addEventListener('DOMContentLoaded', function () {
   

    var moreButton = document.getElementById('getMore');
    
    moreButton.addEventListener('click', function () {
        GetQuote();
    });

    GetQuote();
});

