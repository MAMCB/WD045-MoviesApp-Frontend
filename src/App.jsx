import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen dark:bg-gray-800 ">
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
