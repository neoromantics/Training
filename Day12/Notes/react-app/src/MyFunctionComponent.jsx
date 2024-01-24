import React, { useEffect, useState } from 'react';

function MyFunctionComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // Cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array makes this run like componentDidMount

  return (
    <div>
      {data ? <p>Data loaded</p> : <p>Loading...</p>}
    </div>
  );
}

export default MyFunctionComponent;
