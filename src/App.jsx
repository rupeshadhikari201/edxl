import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SignUpVerification from "./pages/SignUpVerification";
import EventCreation1 from "./pages/EventCreation1";
import EventCreation2 from "./pages/EventCreation2";
import EventCreation3 from "./pages/EventCreation3";
import Profile from "./Components/Profile";
import DashBoard from "./pages/DashBoard";
import Events from "./pages/Events";
import Setting from "./pages/Setting";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/edxl" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/sp" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/confirm" element={<SignUpVerification />} />
				<Route path="/register" element={<EventCreation1 />} />
				<Route path="/register2" element={<EventCreation2 />} />
				<Route path="/register3" element={<EventCreation3 />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/events" element={<Events />} />
				<Route path="/dashboard" element={<DashBoard />} />
				<Route path="/settings" element={<Setting />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
