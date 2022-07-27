import React from "react";
import "./App.css";

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

export default class App5 extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const animalsList = animals.map(function (animal,index)   {
            return <li key={index}>{animal}</li>
        })
        console.log(animalsList);

        return( 
            <div className="parent-list">This is the Animals List: <ul>{animalsList}</ul></div>
        )
    }
}