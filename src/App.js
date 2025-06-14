import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch a fact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Cat Fact Generator 🐱</h1>
      <button onClick={fetchFact} style={styles.button}>
        {loading ? 'Loading...' : 'Get a Cat Fact'}
      </button>
      {fact && <p style={styles.fact}>{fact}</p>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  fact: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default App;
