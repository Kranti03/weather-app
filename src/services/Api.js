const baseUrl = 'https://www.metaweather.com/api/';

const Api = {
    GET: (path) => fetch(`${baseUrl}${path}`, {method: "GET"}),
};

export const searchCity = (query) => Api.GET(`location/search/?query=${query}`);
export const cityWeather = (query) => Api.GET(`location/${query}`);