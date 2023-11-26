import "./App.css";
import "./Main/Main.css";
import "./Footer/Footer.css";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";

function App() {
  const temperature = "55F";

  return (
    <div>
      <Header />
      <Main temperature={temperature} />
      <Footer />
      <ModalWithForm title='New Garment'>These are the children</ModalWithForm>
    </div>
  );
}
export default App;
