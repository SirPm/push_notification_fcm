// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging-compat.js");
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyDtd7poHyv6lbJlt0sE3Mt5oG8mhTsZu6Q",
	authDomain: "react-firebase-4a1f5.firebaseapp.com",
	projectId: "react-firebase-4a1f5",
	storageBucket: "react-firebase-4a1f5.appspot.com",
	messagingSenderId: "550463152842",
	appId: "1:550463152842:web:4b45c0b8be72536943ca33",
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
	console.log("[firebase-messaging-sw.js] Received background message bg ", payload);
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/logo192.png",
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
