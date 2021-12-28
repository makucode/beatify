import Maschine from "./components/Maschine";
import Provider from "./components/Provider";

const App = () => {
    return (
        <div className="App">
            <Provider>
                <Maschine />
            </Provider>
        </div>
    );
};

export default App;
