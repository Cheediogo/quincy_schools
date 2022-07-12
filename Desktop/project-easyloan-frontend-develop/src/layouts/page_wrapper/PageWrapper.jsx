import Footer from "../../components/Footer";
import React from "react";
import { Header } from "../../components/index";


const PageWrapper = ({ children }) => {
	return (
		<>
			<Header />
			<section>{children}</section>
			<Footer />
		</>
	);
};

export default PageWrapper;
