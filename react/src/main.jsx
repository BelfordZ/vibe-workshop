import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="shell">
      <p className="eyebrow">Vibe coding workshop</p>
      <h1>Build something small.</h1>
      <p className="intro">
        This is a minimal React + Vite starting point. Change the component,
        add a feature, and ship it to GitHub Pages.
      </p>
      <button onClick={() => setCount((value) => value + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
