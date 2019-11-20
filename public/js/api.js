import $ from 'jquery'
import axios from 'axios'

export const getItems = () => {
    return fetch('/api/cart')
        .then(res => res.json())
        .catch(()=> console.log(`GET ERROR`))
}

export const postItem = (item) => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }
    return fetch('/api/cart', config)
}