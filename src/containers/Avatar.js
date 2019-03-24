import React from 'react';

export const Avatar = (props)=>{
   const user = props.user
        return(
            <div className='issue__user vertical'>
                <img className="issue__user__avatar" src={user.avatar_url} alt=''/>
                <p className='issue__user__name'>{user.login}</p>
            </div>
        )
}