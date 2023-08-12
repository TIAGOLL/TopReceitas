import dados from './dados.json'

const App = () => {

    function display() {
        for (let i = 0; i < dados.services.length; i++) {

            return (
                <div>
                    <h1>{dados.services[{ i }].nome}</h1>
                    <h2>ingredientes</h2>
                    <p>{dados.services[{ i }].ingredientes}</p>
                    <h2>modo de preparo</h2>
                    <p>{dados.services[{ i }].modopreparo}</p>
                </div>
            )
        }
    }

    return (
        <>
            <button onClick={display}>bla</button>
        </>

    )
}

export default App;
