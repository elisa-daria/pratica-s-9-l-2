import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EpibooksNavbar from "./components/EpibooksNavbar";
import EpibooksFooter from "./components/EpibooksFooter.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";

function App() {
  return (
    <>
      <header>
        <EpibooksNavbar />
      </header>
      <main className="bg-dark">
        <AllTheBooks />
      </main>
      <footer>
        <EpibooksFooter />
      </footer>
    </>
  );
}

export default App;
