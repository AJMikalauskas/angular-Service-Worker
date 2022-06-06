import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
 
  // Uses weather interface as expected return format, 
    // also expects type of return from this function to be an observable
  getWeather(city: string): Observable<Weather> {

    //  Each .set() is a query param passed in using the HttpParams() set method
    // Set query parm of city equal to 1, units equal to metric, and appId param set to the environment apiKey
    // all seen in the API of openweather @ "https://openweathermap.org/current#data"
    // removed <> from being around apiKey and switched order of set for correct url due to link above.
    const options = new HttpParams()
    .set("q", city)
    .set("appid", environment.apiKey)
    .set("units", "metric");

    return this.http.get<Weather>(environment.apiUrl + "weather", { params: options }); 
  }
}
