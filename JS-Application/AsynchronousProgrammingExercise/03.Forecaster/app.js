function attachEvents() {
    document.getElementById("submit").addEventListener("click", getWeather);
}

async function getWeather() {

    try {
        let forCast = document.querySelector(`.forecasts`);
        if (forCast) {

            let current = document.getElementById("current");
            current.removeChild(forCast);

            let upcomingForecast = document.querySelector(`.forecast-info`);
            let upcoming = document.getElementById("upcoming");
            upcoming.removeChild(upcomingForecast);
        }

        let location = document.getElementById("location").value;

        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        const data = await response.json();

        let locationObj = data.find(x => x.name === location);
        if (!locationObj) {
            throw new Error("Error");
        }
        const forecast = document.getElementById("forecast");
        forecast.style.display = "block";
        let locationCode = locationObj.code;

        getCurrentWeather(locationCode);

        getUpcomingWeather(locationCode);
    } catch (err) {
        let forecast = document.getElementById("forecast");
        forecast.textContent = "Error"

    }
}

async function getCurrentWeather(code) {
    const enumCondition = {
        "Sunny": `&#x2600`, //☀
        "Partly sunny": `&#x26C5`, // ⛅
        "Overcast": `&#x2601`, // ☁
        "Rain": `&#x2614`, // ☂
        "Degrees": `&#176`   // °

    }
    let currentConditions = document.getElementById("current");
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
    const data = await response.json();

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("forecasts");
    let symbolSpan = document.createElement("span");
    symbolSpan.classList.add("condition");
    symbolSpan.classList.add("symbol");
    let condition = data.forecast.condition;
    symbolSpan.innerHTML = `${enumCondition[condition]}`

    let forecastSpan = document.createElement("span");
    forecastSpan.classList.add("condition");

    let locationName = data.name;
    let locationSpan = document.createElement("span");
    locationSpan.classList.add("forecast-data");
    locationSpan.textContent = locationName;

    let degreeHigh = data.forecast.high;
    let degreeLow = data.forecast.low;
    let degreeSpan = document.createElement("span");
    degreeSpan.classList.add("forecast-data");
    degreeSpan.innerHTML = `${degreeLow}${enumCondition.Degrees}/${degreeHigh}${enumCondition.Degrees}`

    let locationCondition = data.forecast.condition;
    let conditionSpan = document.createElement("span");
    conditionSpan.classList.add("forecast-data");
    conditionSpan.textContent = locationCondition;

    forecastSpan.appendChild(locationSpan);
    forecastSpan.appendChild(degreeSpan);
    forecastSpan.appendChild(conditionSpan);

    mainDiv.appendChild(symbolSpan);
    mainDiv.appendChild(forecastSpan);

    currentConditions.appendChild(mainDiv);
    return;
}
async function getUpcomingWeather(code) {

    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
    const data = await response.json();
    let upcomingWeather = document.getElementById("upcoming");
    let div = document.createElement("div");
    div.classList.add("forecast-info");

    upcomingWeather.appendChild(div);

    createSpans(data.forecast[0]);
    createSpans(data.forecast[1]);
    createSpans(data.forecast[2]);

    return;

}
function createSpans(obj) {
    const enumCondition = {
        "Sunny": `&#x2600`, //☀
        "Partly sunny": `&#x26C5`, // ⛅
        "Overcast": `&#x2601`, // ☁
        "Rain": `&#x2614`, // ☂
        "Degrees": `&#176`   // °
    }
    let div = document.querySelector("div.forecast-info");
    let mainSPan = document.createElement("span");
    mainSPan.classList.add("upcoming");
    let symbolSPan = document.createElement("span");
    symbolSPan.classList.add("symbol");
    symbolSPan.innerHTML = `${enumCondition[obj.condition]}`;
    let degreeSPan = document.createElement("span");
    degreeSPan.classList.add("forecast-data");
    degreeSPan.innerHTML = `${obj.low}${enumCondition.Degrees}/${obj.high}${enumCondition.Degrees}`;
    let conditionSPan = document.createElement("span");
    conditionSPan.classList.add("forecast-data");
    conditionSPan.textContent = obj.condition;

    mainSPan.appendChild(symbolSPan);
    mainSPan.appendChild(degreeSPan);
    mainSPan.appendChild(conditionSPan);

    div.appendChild(mainSPan);

    return;


}

attachEvents();