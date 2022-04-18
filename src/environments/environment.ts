// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'chat-app-19d4a',
    appId: '1:616724493012:web:bcce71f65e247aae214141',
    storageBucket: 'chat-app-19d4a.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB06Cdxk5baKvUqVYiHdlmy_bZabche51o',
    authDomain: 'chat-app-19d4a.firebaseapp.com',
    messagingSenderId: '616724493012',
  },
  server:{
    url:'http://localhost:8080',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
