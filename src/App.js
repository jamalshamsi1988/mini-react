import Header from "./components/Header";
import "./assets/styles/index.css";
import Courses from "./components/Courses";

function App() {
  return (
    <>
      <Header />
      <article className="wrapper">
        <Courses />
        <Courses />
        <Courses />
      </article>
    </>
  );
}

export default App;
