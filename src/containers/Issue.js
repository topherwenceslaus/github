import React from 'react';
import { Link } from 'react-router-dom';

export const Issue = (props)=>{
    const issue = props.issue
    console.log(issue.number)
    return(
        <div className='issue__body'>
        <Link  to={`/issues/${issue.number}`}>
             <b>{issue.title}</b>
            <p>{issue.body}</p>
        </Link>
        </div>
    )
}