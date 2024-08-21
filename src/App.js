import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <p>PLEASE CLICK THE BUTTON TO OPEN THE MODAL</p>
      <button onClick={() => setOpenModal(true)}>OPEN THE MODAL</button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
