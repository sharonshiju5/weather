let weather=[]


async function fetchData(){
    let city=document.getElementById("city").value
    document.getElementById("city").value=``
      console.log(city);
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5a9aeb046e7a4413d624f4dae274800`)
        const data=await res.json();
        console.log(data);
        let mtemp=(data.main.temp-273.15).toFixed(2);;
        let mxtemp=(data.main.temp_max-273.15).toFixed(2);
        let mntemp=(data.main.temp_min-273.15).toFixed(2)
        let ftemp=(data.main.feels_like-273.15).toFixed(2);
       
       
        let cloud=(data.weather[0].main)
        let humi=(data.main.humidity)
        let wind=(data.wind.speed)
        let name=(data.name)
        let night=(data.sys.sunset)
        let info=(data.weather[0].description)
        console.log(night);
        

// "sys": {
//     "country": "IN",
//     "sunrise": 1733014956,
//     "sunset": 1733056301


        if(night>=1733056301){
            if(cloud=="Rain"){
                a=`./assets/icon_sun_clouds_rain.png`
            }
            else if(cloud=="Clouds"){
                a=`./assets/icon_sun_clouds.png`
            }
            else if(cloud="Mist"){
                a=`./assets/mist.png`
            }
            else{
                a=`./assets/icon_sun copy.svg`
            }
        }
        else{
            a=`./assets/moon.png`
        }
        console.log(cloud);
        
        weather=[...data.weather]
        str=``
        weather.map((data)=>{
            
            str+=`
            <div class="feild">
                <div class="divs" id="clouds">
                    <img src="${a}" alt="" id="sun">
                    <p>${cloud}</p>
                    <p>${info}</p>
                </div>
                <div class="divs">
                    <div class="temp">
                    <h1>${ftemp}°c</h1>
                </div>
                <div class="city">
                    <h3>${name}</h3>
                </div>
                <div class="div2">
                    <div class="subdiv">
                        <img src="./assets/humidity.png" alt="" id="thermmo"><p>${humi}<br>hummidity</p>
                    </div>
                    <div class="subdiv">
                        <img src="./assets/wind.png" alt="" id="thermmo"><p>${wind} <br>wind speed</p>
                    </div>
                </div>
                </div>
            </div>
            
            `

        })
        document.getElementById("container").innerHTML=str;

    } catch (error) {
        
    }
}

