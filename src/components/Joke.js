import React, { useState } from 'react';

const Joke = props => {
    const [visible, setVisible] = useState(false);

    const togglePunchline = () => {
        setVisible(!visible);
    }

    return (
        <div key={props.joke.id} className='jokeBox'>
            <p>#{props.joke.id}</p>
            <h3>{props.joke.setup}</h3>
            {!visible && <button onClick={togglePunchline} className='answer-button'>Show Answer</button>}
            {visible && <h4>{props.joke.punchline}</h4>}
        </div>
    )
}

export default Joke;