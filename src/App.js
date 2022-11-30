
import "./index.css";
import Header from "./components/header"
import Buttons from "./components/buttons"
import MainContent from "./components/maincontent"
import Footer from "./components/footer";

//https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A129&t=uQlcLM8xowDk5U6b-0

function App() {
  return (
    <div className="mainContainer">
      <Header/>
      <Buttons />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
