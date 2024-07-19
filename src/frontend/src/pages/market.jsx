import React, { useState, useEffect } from 'react';

function MarketTable({ currentUserId }) {
  // State to store fetched items
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items when the component mounts
    fetch('http://localhost:5000/market', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        // Update state with fetched items
        setItems(data.items);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <div style={{ width: '900px', textAlign: 'center' }}>
          <h2>Available Items on the Market</h2>
          <p>Click on one of the items to start buying</p>
          <br />
        </div>
        <table className="table table-hover table-dark" style={{ width: '900px' }}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {items.filter(item => item.owner !== currentUserId).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td style={{ width: '300px' }}>
                  <button className="btn btn-outline btn-info" onClick={() => console.log('More Info', item.id)}>More Info</button>
                  <button className="btn btn-outline btn-success" style={{ marginLeft: '20px' }} onClick={() => console.log('Purchase', item.id)}>Purchase this Item</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketTable;