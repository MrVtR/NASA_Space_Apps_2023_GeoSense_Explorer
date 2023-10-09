function postRequestLatLon(lat, lon) {
    var xhr = new XMLHttpRequest();
    var url = "https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/writeTif";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.status); //Enviar esse dado pra uma div ou algo do tipo pra ser exibido
        }
    };
    var data = JSON.stringify({"lat": lat, "lon": lon});
    xhr.send(data);
}

