import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './game/game';
import { UserContextProvider } from './meta/usercontext';
import MetaBox from './meta/metabox/metabox';

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <div className="App">
                    <Routes>
                        <Route index element={<Game/>}/>
                    </Routes>
                    <MetaBox/>
                </div>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
