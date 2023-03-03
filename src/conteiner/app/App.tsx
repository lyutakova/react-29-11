import Footer from 'conteiner/footer/Footer'
import Header from 'conteiner/header/Header'
import Main from 'conteiner/main/Main'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <Cssbaseline />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
