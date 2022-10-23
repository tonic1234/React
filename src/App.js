import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


import './style.scss';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola usuario" />
    </>
  );
}

export default App;
