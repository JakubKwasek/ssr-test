import React from 'react';
class App extends React.PureComponent {
	render() {
		return (
			<p>TEST: {this.props.state.text}</p>
		)
	}
}

export default App;