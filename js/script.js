// diese url abfragen: http://api.weatherstack.com/current?access_key=2a42a4fff642fb4f07a7f62b299853a8&query=Rotkreuz

let city = "Rotkreuz";

$.getJSON('http://api.weatherstack.com/current?access_key=2a42a4fff642fb4f07a7f62b299853a8&query=' + city, function (data) {
    let temp = data.current.temperature;
    let uv = data.current.uv_index;
    let icon_url = data.current.weather_icons[0]
    $(".wetter_location").html("Aktuell " + temp + "°C<br />" + city);
    $(".wetter_icon").html("<img src=\"" + icon_url + "\">");
    $(".wetter_uv").html("<span class=\"uv_header\">UV-Index</span><span>" + uv + "</span>");
});

$(".countdown").countdown({
    until: +3000,
    compact: true,
    format: 'HMS'
});
