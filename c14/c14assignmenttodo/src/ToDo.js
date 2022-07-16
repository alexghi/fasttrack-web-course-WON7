import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React from "react";

function ToDo() {

    return (
        <div  className="todo">
            <p>This is my To Do List:</p>
            <ol>
                <li>Task #1</li>
                <li>Task #2</li>
                <li>Task #3</li>
                <li>Task #4</li>
                <li>Task #5</li>
            </ol> 
        </div>
    )

}

export default ToDo;
