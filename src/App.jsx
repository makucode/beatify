import Alert from "./components/Alert";
import Maschine from "./components/Maschine";
import Provider from "./components/Provider";
import useIsMobile from "./hooks/useIsMobile";

const App = () => {
    const isMobile = useIsMobile();

    return (
        <div className="App">
            <Provider>
                <Maschine />
            </Provider>
            {isMobile && <Alert />}
        </div>
    );
};

export default App;
