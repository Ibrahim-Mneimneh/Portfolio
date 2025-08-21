import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Notfound from "./pages/404.jsx";

import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
