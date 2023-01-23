import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterListContainer from './CharacterListContainer/CharacterListContainer';
import CharacterDetail from './CharacterDetail/CharacterDetail';



const App = () => {

  return (

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<CharacterListContainer />} />
        <Route path='/item/:id' element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
