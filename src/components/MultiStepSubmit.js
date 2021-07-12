import React from 'react';
const Submit = (props) => {
	const { data } = props;
	const listItems = Object.entries(data).map(([key, value]) => (
		<li key={key}>
			<strong>{key}:</strong> {value}
		</li>
	));

	console.log(data);
	return (
		<div>
			{listItems}
			<button type="submit">Submit</button>
		</div>
	);
};
export default Submit;
