import $ from 'jquery'

export const getItems = () => {
    return fetch('/api/cart')
        .then(res => res.json())
        .catch(()=> console.log(`GET ERROR`))
}

export const postItem = item => {
    const {id, color, description, price} = item
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }
    return fetch('/api/cart', options)
        .then(res => res.json())
        .catch(()=> console.log(`POST ERROR`))
}