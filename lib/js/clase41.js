var appid = '32f843d833c38373032f825c4a92418a',
    url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=' + appid;

$.get(url, (r) => {
    console.log(r);
});