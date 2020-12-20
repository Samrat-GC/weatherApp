const key = 'wMXPbjtfTcFwiOJ7pX587axAGv7v7UOk';

// get weather information
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

}
 
// get city info 
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

};

// console.log(getCity('kathmandu').then(data => getWeather(data.Key))
// .then(data => data.Temperature.Metric.Value)
// .then(data => data)
// .catch(err => console.log(err)))

// getCity('butwal').then(data => console.log(data));
// getWeather('1185').then(data => console.log(data));


