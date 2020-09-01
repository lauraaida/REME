// diese url abfragen: http://api.weatherstack.com/current?access_key=XXXXXXXXXXX&query=Rotkreuz

let city = "Lausanne";
$.getJSON('http://api.weatherstack.com/current?access_key=XXXXXXXXX&query='+city, function(data) {
    let temp = data.current.temperature;
    let uv = data.current.uv_index;
    let icon_url = data.current.weather_icons[0]
    document.querySelector(".wetter_location").innerHTML = "Aktuell " + temp + "°C<br />" + city;
    document.querySelector(".wetter_icon").innerHTML = "<img src=\"" + icon_url + "\">";
    document.querySelector(".wetter_uv").innerHTML = "<span class=\"uv_header\">UV-Index</span><span>" + uv + "</span>"; 
});