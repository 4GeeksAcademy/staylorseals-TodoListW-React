import React, { useState } from "react";

//create your first component
const Home = () => {

	const [todo, setTodo] = useState(["walk the fish", "wash the lawnmower", "cut the dishes", "iron the grass", "fold the books", "organize the dust", "vacuum the garden"]);
	const [inputValue, setInputValue] = useState("")

	const addTodo = () => {
		if (inputValue.trim() != '') {
			setTodo([...todo, inputValue]);
			setInputValue("");
		}
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};

	const deleteTodo = (indexToDelete) => {
		setTodo(todo.filter((_,index) => index !== indexToDelete));
	};

		return (
			<div className="text-center">
				<div className="todo-container">
					<h1 className="text-center mt-5">To-Do List</h1>
					<div>
						<input 
							type="text" 
							placeholder="What else is on the agenda?"
							value={inputValue}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<button type="button" onClick={addTodo}>
							Add
						</button>
					</div>

					<ul>
						{todo.length === 0 ? (
							<li className="empty-list">
								No tasks; Maybe rest?
							</li>
						) : (
							todo.map((todo, index) => (
								<li key={index} className="todo-item">
									{todo}
									<button
										className="delete-button"
										onClick={() => deleteTodo(index)}>
											Delete
										</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		);
};

export default Home;