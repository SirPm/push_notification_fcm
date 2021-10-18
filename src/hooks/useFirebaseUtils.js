// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDtd7poHyv6lbJlt0sE3Mt5oG8mhTsZu6Q",
	authDomain: "react-firebase-4a1f5.firebaseapp.com",
	projectId: "react-firebase-4a1f5",
	storageBucket: "react-firebase-4a1f5.appspot.com",
	messagingSenderId: "550463152842",
	appId: "1:550463152842:web:4b45c0b8be72536943ca33",
};

const app = initializeApp(firebaseConfig);
console.log(app, "app");

// if ("serviceWorker" in navigator) {
// 	navigator.serviceWorker
// 		.register("./firebase-messaging-sw.js")
// 		.then(function (registration) {
// 			console.log("Registration successful, scope is:", registration.scope);
// 		})
// 		.catch(function (err) {
// 			console.log("Service worker registration failed, error:", err);
// 		});
// }

const messaging = getMessaging();

export const getFirebaseToken = async () => {
	// Get registration token. Initially this makes a network call, once retrieved
	// subsequent calls to getToken will return from cache.
	getToken(messaging, { vapidKey: "BL_B3hFwxrpJZJuvtuq01a_RJ75OKIa1k0w1d6BML-seB0toB2qj855ycyQiFNhXHi7t6ZhQwE60RS8EWipwgck" })
		.then((currentToken) => {
			if (currentToken) {
				console.log(currentToken, "currentToken");
				// Send the token to your server and update the UI if necessary
				// ...
			} else {
				// Show permission request UI
				console.log("No registration token available. Request permission to generate one.");
				// ...
			}
		})
		.catch((err) => {
			console.log("An error occurred while retrieving token. ", err);
			// ...
		});
};

export const onMessageListener = () => {
	return new Promise((resolve) => {
		onMessage((payload) => {
			console.log("payload from onMessageListener ", payload);
			resolve(payload);
		});
	});
};
