import React, { Component } from 'react';
import {connect} from 'react-redux';
import SparkLinesGraph from '../components/component_sparkLineGraph'
import AnimatedSparkLinesGraph from '../components/component_animatedSparkLineGraph'
class WeatherList extends Component {
    



    renderWeatherGraph(cityData){
        const name = cityData.city.name;
        //converiting kevlin to Fahrenheit 
        const temps = cityData.list.map( x => (x.main.temp * (9/5) - 459.67) );
        const humidities = cityData.list.map( x => x.main.humidity);
        const pressures = cityData.list.map( x => x.main.pressure);

        return(
            <tr key={name}>
                <td>{name}</td>
                <td><AnimatedSparkLinesGraph data={temps} sparkLineColor='red' dataUnits='°F' /></td>
                <td><AnimatedSparkLinesGraph data={humidities} sparkLineColor='blue' dataUnits='hPa'/> </td>
                <td><AnimatedSparkLinesGraph data={pressures} sparkLineColor='green' dataUnits='%'/></td>
            </tr>
        )
    }

    render(){

        if(false){
            return <p>no data</p>
        }
        else{
            console.log("Weather is", this.props.weather);
            return (    
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Temperature (°F)</th>
                        <th>Humidity (hPa)</th>
                        <th>Pressure (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map( data => this.renderWeatherGraph(data))}
                </tbody>
            </table>
        )}
    };

}

function mapStateToProps(state){
    return{
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);
