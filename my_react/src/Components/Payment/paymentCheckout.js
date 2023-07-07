import React, { useState } from 'react';
import axios from 'axios';

const JazzcashForm = ({ onSuccess }) => {
  const [response, setResponse] = useState(null);

  const handleCreateWalletRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/Payment');
      setResponse(response.data);
      onSuccess(response.data); // Pass the payment response to the parent component
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateWalletRequest}>
        <button type="submit">Create Wallet Request</button>
      </form>
      {response && (
        <div>
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JazzcashForm;
