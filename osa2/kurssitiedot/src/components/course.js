import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercises={props.parts[0]} />
      <Part part={props.parts[1]} exercises={props.parts[1]} />
      <Part part={props.parts[2]} exercises={props.parts[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
};


const Total = (props) => {
    const total = props.parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <>
        <b>total of {total} exercises</b>
      </>
    )
}

export default Course;
