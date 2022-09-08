import React from 'react'
import { Link } from 'react-router-dom';

const Missing= () => {

    return (
        <>
            <h2>Η Σελίδα δεν βρέθηκε</h2>
            <p>
                <Link to='/'>Επέστρεψε στην Αρχική</Link>
            </p>
        </>
    )
  
}

export default Missing
