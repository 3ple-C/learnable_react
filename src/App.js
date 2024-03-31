// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// App.js

import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [des, setDes] = useState("");
	const [notes, setNotes] = useState(data);
	const [count, setCount] = useState(4);
  const [bold, setBold] = useState("");

	function remove(id) {
		setNotes(notes.filter((e) => e.key !== id));
	}

  const changeFonts = () => {
    
      // const font = document.getElementsByTagName("p")
    // des.style.fontWeight= "bold";

    // notes[count]
    
    
  }

	function handle() {
		if (!title || !des) {
			window.alert("Incomplete input");
			return;
		}
		setNotes([...notes, { key: count, title: title, des: des }]);
		setCount(count + 1);
		setTitle("");
		setDes("");
    
		console.log(notes);
	}

  
 

	return (
		<div className="App">
			<div className="card">
				<div className="head">
					<h1>Notepad v1.0</h1>
				</div>
				<div className="notes">
					{notes.map((e) => (
						<div className="notes-item">
							<div style={{ width: "90%" }}>
								<h4>Topic: {e.title}</h4>
								<p>Details: {e.des} </p>
							</div>
							<button
								type="input"
								style={{
									fontSize: "20px",
									width: "8%",
									height: "35px",
									padding: "0 2% 0 2%",
									color: "black",
								}}
								onClick={() => remove(e.key)}
							>
								X
							</button>
              <button
								type="input"
								style={{
									fontSize: "20px",
									width: "8%",
									height: "35px",
									padding: "0 2% 0 2%",
									color: "black",
								}}
								onClick={() => changeFonts()}
							>
								<b>B</b>
							</button>
						</div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
						<input
							type="text"
							id="title"
							placeHolder="Add title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input>
						<input
							type="text"
							id="description"
							placeholder="Notes"
							value={des}
							onChange={(e) => {
								setDes(e.target.value);
							}}
						></input>
						<button type="submit" onClick={handle}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// Dummy data
const data = [
	{
		key: 0,
		title: "Html",
		des: "HyperText MarkUp Language",
	},
	{ key: 1, title: "CSS", des: "StyleSheet" },
	{
		key: 2,
		title: "JavaScript",
		des: "Scripting language for web",
	},
	{
		key: 3,
		title: "React",
		des: "JavaScript framework",
	},
];




export default App;
