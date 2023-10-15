import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				></Route>
				<Route
					path="/service"
					element={<Service />} />

				<Route
					path="/about"
					element={<About />}
				/>

				<Route
					path="/contact"
					element={<Contact />}
				/>

				<Route
					path="/sp"
					element={<Signup />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
