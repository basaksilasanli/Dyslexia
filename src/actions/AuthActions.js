import { GET_POSTS } from './types'
import axios from 'axios'


export const getPosts = () => {
    return(dispatch) => {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then(response => {
            console.log(response.data,'success')
            dispatch({
                type: GET_POSTS,
                payload: response.data
            })

        }).catch(error => {
            console.log("error:", error)
        })     

    }



}