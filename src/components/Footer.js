import React from 'react'

const Footer = ()=> {
    const today = new Date();
    return (
        <footer className='Footer' >
            <p style={{color:'white' ,fontSize:'12px'}}>ΑΟ ΔΙΑΝΑ &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
