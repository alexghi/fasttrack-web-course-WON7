import React from "react";
import "./App.css";

const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
const animalObjects = [
  { name: "dog", icon: "🐶" },
  { name: "cat", icon: "🐱" },
  { name: "chicken", icon: "🐔" },
  { name: "cow", icon: "🐮" },
  { name: "sheep", icon: "🐑" },
  { name: "horse", icon: "🐴" },
];

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const animalObjectsList = animalObjects.map(function(animalObject,index) {
        return <div key= {index} style={{
            border:'solid',
           width:100  
        }}>{animalObject.icon}{animalObject.name}</div>;
      });
    return (
        <div>
            {animalObjectsList}
        </div>
    )
  }
}

export default class App5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const animalsList = animals.map(function (animal, index) {
      return <div key={index}>{animal}</div>;
    });
    console.log(animalsList);

    return (
      <div className="parent-list">
        This is the Animals List:<ItemComponent/>
      </div>
    );
  }
}