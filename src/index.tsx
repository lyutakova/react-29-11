import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Lorem</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <title>Lorem</title>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, repudiandae eligendi error dignissimos quis soluta
                quasi hic corrupti. A labore nulla impedit doloremque odio cum
                voluptates nesciunt obcaecati vero molestias.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, repudiandae eligendi error dignissimos quis soluta
                quasi hic corrupti. A labore nulla impedit doloremque odio cum
                voluptates nesciunt obcaecati vero molestias.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
