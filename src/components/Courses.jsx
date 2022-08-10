import HTML from "../assets/img/HTML.png"

const Courses = ({courses, course, styles}) => {
  return (
    <section className="courses-box" style={ styles }>
      <h3>{courses}</h3>
      <h4>{course}</h4>
      <img src={HTML} />
    </section>
  );
};
 
export default Courses;