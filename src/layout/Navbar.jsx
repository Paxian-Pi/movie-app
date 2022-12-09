import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { windowDimension } = useSelector(state => state.app.value)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                {
                    windowDimension.winWidth <= 834
                        ? <div className="navbar-brand ms-auto me-auto text-light text-border btn">MyTestApp</div>
                        : <div className="navbar-brand ms-5 text-light text-border btn">MyTestApp</div>
                }
            
            </div>

        </nav>
    )
}

export default Navbar