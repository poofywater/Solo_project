import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld';
import Search from './components/Search.js';
import Suggestions from './components/Suggestions.js';

import {useState} from 'react';

    const App = () => {
        
        const [suggestions] = useState([ 
               {
                food: 'pizza'

                }, 
                {
                food: 'hotdog'

                }, {
                    food: 'ramen'

                }])


        return (
            <div className = 'container'>
                <Suggestions suggestions = {suggestions} />
                <HelloWorld />
                <Search />
            </div>

        );
    }
   
if (module.hot) {
    module.hot.accept('./HelloWorld', () => App());
  }

export default App;