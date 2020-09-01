// diese url abfragen: http://api.weatherstack.com/current?access_key=2a42a4fff642fb4f07a7f62b299853a8&query=Rotkreuz

let city = "Lausanne";
$.getJSON('http://api.weatherstack.com/current?access_key=2a42a4fff642fb4f07a7f62b299853a8&query='+city, function(data) {
    let temp = data.current.temperature;
    let uv = data.current.uv_index;
    let icon_url = data.current.weather_icons[0]
    document.querySelector(".wetter_location").innerHTML = "Aktuell " + temp + "°C<br />" + city;
    document.querySelector(".wetter_icon").innerHTML = "<img src=\"" + icon_url + "\">";
    document.querySelector(".wetter_uv").innerHTML = "<span class=\"uv_header\">UV-Index</span><span>" + uv + "</span>"; 
});