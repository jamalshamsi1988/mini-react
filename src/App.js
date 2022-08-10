import Header from "./components/Header";
import "./assets/styles/index.css";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <article className="wrapper">
        <Courses
          courses="HTML"
          course="Flex"
          styles={{ backgroundColor: "gold" }}
        />
        <Courses
          courses="HTML"
          course="Grid"
          styles={{ backgroundColor: "green" }}
        />
        <Courses
          courses="HTML"
          course="Sematic-Tags"
          styles={{ backgroundColor: "blue" }}
        />
      </article>
      <Footer> This is my first site by React. </Footer>
    </>
  );
}

export default App;
