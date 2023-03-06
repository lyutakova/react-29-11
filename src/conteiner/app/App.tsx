import Footer from 'conteiner/footer/Footer'
import Header from 'conteiner/header/Header'
import Main from 'conteiner/main/Main'
import CssBaseline from '@mui/material/CssBaseline'



type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
