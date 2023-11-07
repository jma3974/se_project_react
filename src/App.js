import "./App.css";
import Main from "./Main/Main.js";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";


function App() {
  return (
    <div  className='page'>
      <Header />

      <Main />

      <Footer />

<ModalWithForm title="New Garment Form">Children</ModalWithForm>

    </div>
  );
}

export default App;
