import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import EpibooksNavbar from "./components/EpibooksNavbar";
import EpibooksFooter from "./components/EpibooksFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import BookList from "./components/BookList.jsx";
import horrors from "./data/horror.json";

function App() {
  return (
    <>
      <header>
        <EpibooksNavbar />
        <Welcome />
      </header>
      <main className="bg-dark">
        <BookList books={horrors} />
      </main>
      <footer>
        <EpibooksFooter />
      </footer>
    </>
  );
}

export default App;
