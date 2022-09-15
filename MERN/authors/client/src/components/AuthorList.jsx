import e from "cors";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeletButton";

//nav('/author/edit/'+author._id )

const AuthorList = (props) => {
    const { authors, removeFromDom }= props;
    const nav = useNavigate();
    console.log(props.authors);
    
    const returnHome = authorId => {
        console.log(authorId);
        nav('/author/edit/'+authorId );
    }

    return (
        <table>
            <thead>
            <tr>
                <th> Author </th>
                <th> Actions </th>
            </tr>
            </thead>
            <tbody>
                
            {authors.map((author, idx) => {
                return <tr key={idx}>
                    <td>{ author.author_name }</td>
                    <td>
                        <button onClick={()=> returnHome(author._id) }>Edit</button>
                        <DeleteButton authorId={ author._id } successCallback={() => removeFromDom(author._id)}/>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    )

}
export default AuthorList;