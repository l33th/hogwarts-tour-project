import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
    <main>
      <Tours />
    </main>
  )
}

export default App;
