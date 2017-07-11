// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDK2bCxPk8RE6SK5NaqH9op3XH_gOKoeMs",
    authDomain: "angular-firebase-material-todo.firebaseapp.com",
    databaseURL: "https://angular-firebase-material-todo.firebaseio.com",
    projectId: "angular-firebase-material-todo",
    storageBucket: "angular-firebase-material-todo.appspot.com",
    messagingSenderId: "1028507325634"
  }
};
