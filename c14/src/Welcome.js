import React from 'react';
import StudentItem from './StudentItem';

const students = [
  "Dragos",
  "Flavius",
  "Daniel",
  "Andrei",
  "Emil",
  "Mihai",
  "Roxana"
]

function Welcome() {
  return <div className="welcomeRoot">Welcome to React!
   {
      students.map((studentName, index) => {
        return <StudentItem key={index} name={studentName} />
    })
   }
  </div>;
}

export default Welcome;