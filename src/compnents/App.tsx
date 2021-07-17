import React from 'react';
import ReactDOM from 'react-dom';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';


const App = () => {    
    return <ul>
    {
        pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />
        })
    }
    </ul>;
};

export default App;