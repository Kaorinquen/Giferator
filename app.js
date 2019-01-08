
$(document).ready(function(){

  $("#find-gifs").on("click", function(event) {
    event.preventDefault();

    var userInput = $("#Searchbox").val();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&limit=10&api_key=JFHyfvB2pEYYIIFFyjSlnQcSDuRsUz5T";
    
    

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var imageUrl = response.data.image_original_url;
      var stillImage = $("<img>");
      var results = response.data;
      var stillGif = data-response.data.images.original_still;
      console.log(response);
          for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
              var p = $("<p>").text("Rating: " + results[i].rating);
              var gifImage = $("<img>");
              gifImage.attr("src", results[i].images.fixed_height.url);
              gifDiv.prepend(p);
              gifDiv.append(gifImage);
              $("#gifs-go-here").prepend(gifDiv);  
          }
    });

  });

var stillGif = data-response.data.images.original_still

$(gifImage).on("click", function() {
  gifImage.attr("src", stillGif);

})


