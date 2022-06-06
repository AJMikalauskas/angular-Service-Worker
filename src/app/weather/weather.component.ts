import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // Only defining type, not assigning value
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  // pass in city param while subscribing to getWeather method in weather service; Get results of subscribe
    // which is the weather in the arrow function and set to the weahter variable above by this.weather
  search(city:string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }

}
