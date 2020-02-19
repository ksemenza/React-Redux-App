import React from 'react';
import { connect } from 'react-redux';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import { getData } from '../actions';
import Joke from './Joke';

const JokesList = (props) => {

    const handleClick = e => {
        console.log('in handleClick');
        e.preventDefault();
        props.getData();
    }

    return (
        <div>
            {!props.jokes && <h2>Ready For a Laugh?</h2>}
            <button onClick={handleClick}>Get Jokes</button>
            {props.isFetching && <Loader
                type="ThreeDots"
                color="green"
                height={200}
                width={200}/>
            }
            {props.error && <p>{props.error}</p>}
            {props.jokes && <div className='jokesBox'>
                {props.jokes.map(joke => <Joke joke={joke} key={joke.id}/>)}
                </div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
    jokes: state.jokes,
    error: state.error
    }
}

export default connect(mapStateToProps, { getData })(JokesList);