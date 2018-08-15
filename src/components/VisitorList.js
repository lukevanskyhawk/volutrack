import React from 'react';


const VisitorList = (props) => (

    < ul >
        {
            props.visitors.map((visitor, index) => (
                <li className="in" key={index}><span>{visitor.name}</span>
                    <label >Time In: {visitor.timeIn}</label>
                    <label>Classroom: {visitor.classroom}</label>
                    <label>Visit Type: {visitor.visitType}</label>
                    <button>Check Out</button>
                </li>
            ))
        }
    </ul >
);

export default VisitorList;