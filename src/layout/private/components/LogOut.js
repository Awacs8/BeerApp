import React from 'react'
import { deleteUser } from '../../../services/auth_service'
import { useHistory } from 'react-router-dom';

export const LogOut = () => {
const history = useHistory();

    const handleClick = () => {
        deleteUser().then(() => {
        history.push('/login');
        })
    }
    return(
        <div> 
            <button id="button" onClick={handleClick}>LogOut</button>
        </div>
    )

}