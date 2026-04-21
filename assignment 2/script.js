const API_KEY='1a1900dc512846a29e1203741261703';
const cityInput=document.getElementById('cityInput');
const searchBtn=document.getElementById('searchBtn');
const weatherDisplay=document.getElementById('weatherDisplay');
const historyList=document.getElementById('historyList');
const logOutput=document.getElementById('logOutput');
function addLog(msg){
    const entry=`>${msg}`;
    logOutput.innerHTML+=`<div>${entry}</div>`;
    logOutput.scrollTop=logOutput.scrollHeight;
}
async function fetchWeather(city){
    addLog(`Fetching data for ${city}`);
    weatherDisplay.innerHTML = "Loading:::";
    try {
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);    
        if (!response.ok){
            const errorData=await response.json();
            throw new Error(errorData.error.message || "City not found");
        }
        const data=await response.json();
        weatherDisplay.innerHTML=`
            <h2>${data.location.name},${data.location.country}</h2>
            <img src="https:${data.current.condition.icon}" alt="weather icon">
            <h1>${Math.round(data.current.temp_c)}°C</h1>
            <p>${data.current.condition.text}</p>
        `;
        savehistory(city);
        addLog(`Success:Data received for ${city}`);
    } catch (err){
        addLog(`Error:${err.message}`);
        weatherDisplay.innerHTML =`<p style="color:red">${err.message}</p>`;
    }
}
function savehistory(city){
    let history=JSON.parse(localStorage.getItem('weatherItems')) || [];
    if (!history.includes(city)) {
        localStorage.setItem('weatherItems', JSON.stringify(history));
        renderHistory();
    }
}
function history() {
    const history=JSON.parse(localStorage.getItem('weatherItems')) || [];
    historyList.innerHTML=history.map(item => 
        `<li class="history" onclick="fetchWeather('${item}')">${item}</li>`
    ).join('');
}
searchBtn.addEventListener('click',()=>{
    const city=cityInput.value.trim();
    if (city){
        addLog("Button clicked");
        fetchWeather(city);
        addLog("Continuing script");
    }
});
window.onload=history;