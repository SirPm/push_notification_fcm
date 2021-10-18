import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const NotificationPopUp = ({ title, body, popupVariable, setPopupVariable }) => {
	useEffect(() => {
		if (popupVariable) {
			toast.info(<Display />, {
				onClose: () => setPopupVariable(false),
			});
		}
	}, [popupVariable, setPopupVariable]);

	function Display() {
		return (
			<div>
				<h4>{title}</h4>
				<p>{body}</p>
			</div>
		);
	}

	return <ToastContainer />;
};

export default NotificationPopUp;
