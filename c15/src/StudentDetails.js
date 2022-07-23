import React, {useState, useCallback} from 'react'

const StudentDetails = ( ) => {
    const [studentName, setStudentName] = useState('John');
    const [aaa, setAaaa] = useState(0);
    
    const onStudentInputChange = useCallback( (event) => {
        setStudentName(event.target.value);
    }, [setStudentName])

    const onButtonClick = useCallback( ( ) => {
        setAaaa(aaa + 1)
    }, [aaa, setAaaa])

    return (
        <div>
            {studentName}
            <input value={studentName} onChange={onStudentInputChange}/>

            {/* <input value={studentName} onChange={(e) => {
                setStudentName(e.target.value)
            }}/> */}
            <button onClick={onButtonClick}>set something</button>
        </div>
    )
}



export default StudentDetails;