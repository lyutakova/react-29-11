import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', null, 'Hello react))')

// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//         className: 'red',
//     },
//     'Hello react))'
// )

//=====With JSX

const title = <h1 className="red">Test</h1>

const list = (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
)

const content = (
    <div>
        {title}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
