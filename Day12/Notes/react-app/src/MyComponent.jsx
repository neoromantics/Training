import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Log when the component updates
    if (this.state.data !== prevState.data) {
      console.log('Component data updated');
    }
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners) when the component unmounts
    console.log('Component will unmount');
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? <p>Data loaded</p> : <p>Loading...</p>}
      </div>
    );
  }
}

export default MyComponent;
