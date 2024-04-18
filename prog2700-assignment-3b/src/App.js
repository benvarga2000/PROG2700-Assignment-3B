import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sample from './Sample';
import Random from './Random';
import './App.css';

function App() {
    return (
        <div style={{ backgroundColor: 'yellow', minHeight: '100vh' }}>
            <Router>
                <header style={{ textAlign: 'center', padding: '10px' }}>
                    <h1>React-based Three-in-a-Row Game</h1>
                </header>
                <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                        <li style={{ marginRight: '10px' }}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                            <Link to="/random">Random Game</Link>
                        </li>
                        <li>
                            <Link to="/sample">Sample Game</Link>
                        </li>
                    </ul>
                </nav>
                <main style={{ textAlign: 'center' }}>
                    <Routes>
                        <Route path="/sample" element={<div><h2>Sample Game</h2><Sample /></div>} />
                        <Route path="/random" element={<div><h2>Random Game</h2><Random /></div>} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
