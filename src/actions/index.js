import axios from 'axios'
export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

const source ='https://official-joke-api.appspot.com/jokes/programming/ten'

export  const getData = () => dispatch => {
    dispatch({type:FETCH_DATA_START})
    axios.get(source)
    .then(res => {
        console.log(res)
        dispatch({type:FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err); 
        dispatch({
            type:FETCH_DATA_FAILURE,
            payload: `${err.res.status} ${err.res.data}`
        })
      
    })
}