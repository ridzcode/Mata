const btn = document.getElementById("button-addon2");

btn.addEventListener('click', function() {
    const input = document.getElementsByClassName("form-control")[0].value;
    const ip = input; // Current IP
    const XMLHttp = new XMLHttpRequest();

    XMLHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            // Code output
            document.getElementById("ip").textContent = json.ip;
            document.getElementById("success").textContent = json.success;
            document.getElementById("message").textContent = json.message;
            document.getElementById("type").textContent = json.type;
            document.getElementById("continent").textContent = json.continent;
            document.getElementById("continent_code").textContent = json.continent_code;
            document.getElementById("country").textContent = json.country;
            document.getElementById("country_code").textContent = json.country_code;
            document.getElementById("country_capital").textContent = json.country_capital;
            document.getElementById("country_phone").textContent = json.country_phone;
            document.getElementById("country_neighbours").textContent = json.country_neighbours;
            document.getElementById("region").textContent = json.region;
            document.getElementById("city").textContent = json.city;
            document.getElementById("latitude").textContent = json.latitude;
            document.getElementById("longitude").textContent = json.longitude;
            document.getElementById("as").textContent = json.as;
            document.getElementById("org").textContent = json.org;
            document.getElementById("isp").textContent = json.isp;
            document.getElementById("timezone").textContent = json.timezone;
            document.getElementById("timezone_name").textContent = json.timezone_name;
            document.getElementById("timezone_dstOffset").textContent = json.timezone_dstOffset;
            document.getElementById("timezone_gmtOffset").textContent = json.timezone_gmtOffset;
            document.getElementById("timezone_gmt").textContent = json.timezone_gmt;
            document.getElementById("currency").textContent = json.currency;
            document.getElementById("currency_code").textContent = json.currency_code;
            document.getElementById("currency_symbol").textContent = json.currency_symbol;
            document.getElementById("currency_rates").textContent = `${json.currency_symbol} ${json.currency_rates} = $1`;
            document.getElementById("currency_plural").textContent = json.currency_plural;
        }
    };
    XMLHttp.open("GET", 'http://free.ipwhois.io/json/' + ip, true);
    XMLHttp.send();
})


