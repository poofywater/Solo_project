import React from 'react';


const Suggestions = ({suggestions}) => {
    return (
        <div className = 'list'>
            {suggestions.map((suggestion) => {
                <h1>{suggestion.food}</h1>
            })}
        </div>
    );
}

export default Suggestions;