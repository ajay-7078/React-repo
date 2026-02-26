import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function App() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
} 

//  const ReactElement = { 
//     type: 'a',
//     props:{
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Google'
//  }
 
// const anotherElement = (
// <a href="https://google.com" target="_blank"> Visit google</a>
// )

// const reactElement = React.createElement(
//     'a',
//     {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     'click me  Google'
// )
const anotherUser = React.createElement(
    'h1',
    {
        className: 'heading',
    },
   anotherUser
)
createRoot(document.getElementById('root')).render(

   <App />
)
