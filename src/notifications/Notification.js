import React, { useEffect } from "react";
import { getFirebaseToken } from "../hooks/useFirebaseUtils";

const Notification = () => {
	useEffect(() => {
		getFirebaseToken();
	}, []);

	return <></>;
};

export default Notification;
