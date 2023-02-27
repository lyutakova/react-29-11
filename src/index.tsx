import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello App component</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                fuga. Laboriosam repellat unde est eum impedit sequi asperiores,
                animi quis a laudantium beatae, ipsum voluptatibus maxime
                libero, optio officiis minus!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptates animi debitis facilis ea dolorem ullam velit amet!
                Officiis impedit doloremque animi perferendis tempora id ut
                dolor tempore voluptatum possimus.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
