var userEntry = ""


$(document).ready(function(){

    var queryURL = "api.giphy.com/v1/gifs/search?api_key=JFHyfvB2pEYYIIFFyjSlnQcSDuRsUz5T";


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      }).then (function(){



console.log("let's rock!")


}


