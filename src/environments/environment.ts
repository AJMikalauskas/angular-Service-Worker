// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'weather-app-angular-482e9',
    appId: '1:290283050585:web:743f80ca76d48d21570348',
    storageBucket: 'weather-app-angular-482e9.appspot.com',
    apiKey: 'AIzaSyBuqKDCHyhnYq2UAeCugk_AlN-KW6VgFQg',
    authDomain: 'weather-app-angular-482e9.firebaseapp.com',
    messagingSenderId: '290283050585',
  },
  // API Url and API key
  apiUrl: "https://api.openweathermap.org/data/2.5/",
  apiKey: "326bebe1d2367985a3ce843d8c71659a",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
