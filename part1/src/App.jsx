const Hello = (props) => {
	console.log(props);
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old
			</p>
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			Greeting app created by{' '}
			<a href='https://github.com/rowlandoka'>RowlandOka</a>
		</div>
	);
};

// const App = () => {
// 	const name = 'Peter';
// 	const age = 10;
// 	return (
// 		<>
// 			<h1>Greetings</h1>
// 			<Hello name='Rowland' age={26 + 10} />
// 			<Hello name={name} age={age} />
// 			<Footer />
// 		</>
// 	);
// };

const App = () => {
	const friends = [
		{ name: 'Micheal', age: 12 },
		{ name: 'Fred', age: 15 },
	];
	return (
		<>
			<p>
				{friends[0].name} {friends[0].age}
			</p>
			<p>
				{friends[1].name} {friends[1].age}
			</p>
		</>
	);
};

export default App;
