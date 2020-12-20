const city = document.querySelector('.change-location');
const card = document.querySelector('.card');
const city_holder = document.querySelector('.details h5')
const condition = document.querySelector('.details div')
const display = document.querySelector('.details span')
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    const{cityDets, weather} = data;

    city_holder.textContent = cityDets.EnglishName;
    display.textContent = weather.Temperature.Metric.Value;
    condition.textContent = weather.WeatherText; 
    
    if(weather.IsDayTime){
        time.setAttribute('src', '../img/day.svg');
    }else if(!weather.IsDayTime){
        time.setAttribute('src', '../img/night.svg');
    }

    if(weather.WeatherIcon){
				icon.setAttribute('src', `../img/icons/${weather.WeatherIcon}.svg`)
				
    }
    

} 

const updateCity = async (city) => {
    const cityDets = await getCity(`${city}`);
    const weather = await getWeather(cityDets.Key); 

    
    return {cityDets, weather};
};

city.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = city.city.value;

      
    
    updateCity(name).then(data => {
			updateUI(data);
			card.classList.remove('d-none');
		})

    localStorage.setItem('recentCity', name);

})


if(localStorage.getItem('recentCity')){
    updateCity(localStorage.getItem('recentCity')).then(data => {
			updateUI(data);
			card.classList.remove('d-none');
		})
}