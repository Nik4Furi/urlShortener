import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <div className="container-fluid my-3" style={{backgroundColor:"white"}}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <img src="img/error.gif" alt="error" className='img-fluid' />
                    </div>
                    <Link to="/"><button className="btn btn-danger my-2">Go Home</button></Link>
                </div>
            </div>
        </>
    )
}

export default Error
