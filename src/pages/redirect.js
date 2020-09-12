import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
	// Essentially the same as componentDidMount()
	// Will redirect to the homepage once the redirect page kind of, finishes loading.
	useEffect(() => {
		navigate("/");
	}, []);
	return null;
};
