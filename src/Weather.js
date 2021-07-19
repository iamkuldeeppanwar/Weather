import React, { Component } from 'react'

export default class Weather extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        error: "",
                        temp: "",
                        name: "",
                        country: "",
                        min: "",
                        max: "",
                        pressure: "",
                        humidity: "",
                        windspeed: "",
                        weather: "",
                        id:"",   
                };
        }
        display = (e) => {
                if (e.key === "Enter") {
                        fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + e.target.value + `&appid=b5d0f0e9b4a304c539c96c506b1b4baf`)
                        .then((data) => {
                                        return (data.json())
                                })
                                .then((data) => {
                                        console.log(data)
                                        if (data.cod == "404") {
                                                this.setState({
                                                        error: data.message,
                                                        temp: "", max: "", min: "",
                                                        pressure: "", humidity: "",
                                                        name: "", country: "", windspeed: "",
                                                        weather: "",id:"",
                                                })
                                        }
                                        else this.setState({ error: "" })
                                        this.setState({
                                                temp: "temp:" + Math.floor(data.main.temp - 273) +
                                                "°C", name: data.name + ",", country: data.sys.country,
                                                min: "min: " + Math.floor(data.main.temp_min - 273) + "°C",
                                                max: "max: " + Math.floor(data.main.temp_max - 273) +
                                                "°C", pressure: "pressure: " + data.main.pressure +
                                                "Pa", humidity: "humidity: " + data.main.humidity +
                                                "g/kg", windspeed: "windspeed: " + data.wind.speed + "km/hr",
                                                id:"id" + data.weather[0].id + "," , weather: "weather" + data.weather[0].main        
                                        })   
                                        if(data.weather[0].main=="Clouds"){
                                                tempicon.style.backgroundSize = "320px 420px";
                                                tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaSs9G2CuGE_hHTTHupLz2AP0la11DMC6OQ&usqp=CAU")'
                                        }else{
                                                if(data.weather[0].id > 700 && data.weather[0].id < 800){
                                                        tempicon.style.backgroundSize = "320px 420px";
                                                        tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsPkGJ_fGXv6433o9wSm36dVNXgTjZJzeJw&usqp=CAU")'
                                                }else{
                                                        if(data.weather[0].main=="Rain"){
                                                                tempicon.style.backgroundSize = "320px 420px";
                                                                tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hCZQKKJdFvwJUMFPllfqdwoMDexauUwP4A&usqp=CAU")'
                                                        }else{
                                                                if(data.weather[0].main=="Thunderstorm"){
                                                                        tempicon.style.backgroundSize = "320px 420px";
                                                                        tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2XF9t0NQwvZXRcTCsIodGulLFqLFA6kTuw&usqp=CAU")'
                                                                }else{
                                                                        if(data.weather[0].main=="Drizzle"){
                                                                                tempicon.style.backgroundSize = "320px 420px";
                                                                                tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZirZO5x3S17Bg208anbYJkKRp0UNoYRclOw&usqp=CAU")'
                                                                        }else{
                                                                                if(data.weather[0].main=="Snow"){
                                                                                        tempicon.style.backgroundSize = "320px 420px";
                                                                                        tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HhFce6uG2dQra11zoVqVpA6DI1EEXdYFuQ&usqp=CAU")'
                                                                                }else{
                                                                                        if(data.weather[0].main=="Clear"){
                                                                                                tempicon.style.backgroundSize = "320px 420px";
                                                                                        tempicon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmieJJP_2ONF6BDYS-igJdwgpsJ9HHL6yrA&usqp=CAU")'

                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                        });
                e.target.value="";        
                }
                var tempicon = document.getElementById("icon");      
        }
        render() {
                return ( 
                        <div className="main-div" id="icon">
                                <input onKeyDown={this.display} type="text" placeholder="enter your city" />
                                <div className="city-location">{this.state.name}{this.state.country} </div>
                                <div className="temprature">{this.state.temp}</div>
                                <div className="min-max">{this.state.min} {this.state.max}</div>
                                <div className="pressure">{this.state.pressure}</div>
                                <div className="humidity">{this.state.humidity}</div>
                                <div className="windspeed">{this.state.windspeed}</div>
                                <div className="weather">{this.state.weather}</div>
                                <div className="error">{this.state.error}</div>       
                        </div>            
                )
        }
}
