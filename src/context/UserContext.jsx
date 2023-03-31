import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// localStorage.clear();
		const userData = JSON.parse(localStorage.getItem("localUser"));
		if (userData) {
			console.log("local storage at context", userData);
			setUser(userData.result);
		} else {
			setUser([]);
		}
	}, []);

	const state = {
		user,
		setUser,
	};

	return (
		<UserContext.Provider value={state}>{props.children}</UserContext.Provider>
	);
};
