import React, { useState } from 'react';

const Joke = props => {
    const [visible, setVisible] = useState(false);

    const togglePunchline = () => {
        setVisible(!visible);
    }

    return (
        <div key={props.joke.id} className='joke'>
        
            <h3>{props.joke.setup}</h3>
            {!visible && <button onClick={togglePunchline} className='answer-button'>ENTER</button>}
            {visible && <h4 className='punch-line'>{props.joke.punchline}</h4>}
        </div>
    )
}

export default Joke;