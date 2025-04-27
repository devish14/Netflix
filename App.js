import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './components/List';

const App = () => {
    return (
        <div>
            <List />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);