import React from 'react';

const Rows = (props) => {
    return (
        // <table>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 {props.id}
        //                 {props.name}
        //                 {props.address}
        //                 {props.number}
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
        <ul>
            <li>{"ID:- "+props.id}</li>
            <li>{"Name:- "+props.name}</li>
            <li>{"Address:- "+props.address}</li>
            <li>{"Phone Number:- "+props.number}</li>
        </ul>
    )
};

export default Rows;
