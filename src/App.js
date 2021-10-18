import React, { /* useState, */ useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import { onMessageListener } from "./hooks/useFirebaseUtils";
// import NotificationPopUp from "./notifications/NotificationPopUp";
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
import { getMessaging, onMessage } from "firebase/messaging";
import { getFirebaseToken } from "./hooks/useFirebaseUtils";

function Display({ title, body, image }) {
	return (
		<div>
			<h4>{title}</h4>
			<p>{body}</p>
			{image && <img src={image} style={{ width: "50%" }} alt="notification" />}
		</div>
	);
}

function App() {
	// const [showNoti, setShowNoti] = useState(false);
	// const [notification, setNotification] = useState({ title: "", body: "" });

	useEffect(() => {
		getFirebaseToken();
	}, []);

	// useEffect(() => {
	// 	console.log(notification, "notification");
	// 	console.log(showNoti, "showNoti");
	// }, [notification, showNoti]);

	// onMessageListener()
	// 	.then((payload) => {
	// 		setShowNoti(true);
	// 		setNotification({
	// 			title: payload.notification.title,
	// 			body: payload.notification.body,
	// 		});
	// 		console.log(payload, "payload");
	// 	})
	// 	.catch((err) => console.log(`Failed ${err}`));

	const messaging = getMessaging();
	onMessage(messaging, (payload) => {
		console.log("Message received. ", payload);
		if (payload) {
			// setNotification({
			// 	title: payload.notification.title,
			// 	body: payload.notification.body,
			// });
			// setShowNoti(true);
			toast.info(<Display title={payload.notification.title} body={payload.notification.body} image={payload.notification.image ?? null} />);
		}
	});

	// useEffect(() => {
	// 	const payload = onMessageListener();

	// 	if (payload) {
	// 		setShowNoti(true);
	// 		setNotification({
	// 			title: payload.notification.title,
	// 			body: payload.notification.body,
	// 		});
	// 	}
	// }, [])

	return (
		<div className="App">
			{/* {showNoti && <NotificationPopUp title={notification.title} body={notification.body} popupVariable={showNoti} setPopupVariable={setShowNoti} />} */}
			<h1>HI WELCOME</h1>
			<ToastContainer />
		</div>
	);
}

export default App;
