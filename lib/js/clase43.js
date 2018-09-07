var ip = '',
    api = 'http://freegeoip.net/json/' + ip + '?callback=?';

$.getJSON(api, (r) => {
    console.log(r.country_code);
    console.log(r.time_zone);
    console.log(r.ip);
});