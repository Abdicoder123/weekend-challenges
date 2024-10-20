const apiKey = config.apiKey;
//var URL = "https://api.openweathermap.org/data/2.5/weather?q="+ content +"&appid="+ apiKey;

$("#search").click(function(){
    var location = $("#location").val();
    var URL = "https://api.openweathermap.org/data/2.5/weather?q="+ location +"&appid="+ apiKey;
    //resetting the divs before appending new info
    $("#weather-info").empty();
    $("#error-message").empty();
    $.ajax({
        url: URL,
        method: "GET",
        success: function(data){
            //Adding the data from the ajax get call
            $("#weather-info").append("The temperature is: "+ data.main.temp +"F" +"<br>"); //Posting the temperature of the location
            $("#weather-info").append("The weather is: "+ data.weather[0].main + "<br>"); //Posting the weather of the location
            $("#weather-info").append("The conditions are: "+ data.weather[0].description + "<br>"); //Posting the weather consitions of the location
            $("#weather-info").append("The humidity is: "+ data.main.humidity +"F"+"<br>"); //Posting the humidity of the location
            $("#weather-info").append("The wind speed is: "+ data.wind.speed +" mph" +"<br>"); //Posting the wind speed
        },
        error: function(xhr){
            //Fetching the error and appending it to the div
            console.log(xhr);
            var status = xhr.status;
            var errorMessage = xhr.responseJSON ? xhr.responseJSON.Error : "An unknown error occurred.";
            $("#error-message").append("Error retrieving location data: " + status + " - " + errorMessage);
        }
    });
});
