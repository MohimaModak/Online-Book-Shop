import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_VITE_APIKEY,
//   authDomain: process.env.REACT_APP_VITE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_VITE_PROJECTID,
//   storageBucket: process.env.REACT_APP_VITE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_VITE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_VITE_APPID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
