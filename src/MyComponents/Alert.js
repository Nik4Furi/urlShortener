import React from 'react'

function Alert(props) {
    //Definig the props ,which used to display alerts effectivlly
    const { alert } = props
    return (
        <>
            {alert && <div className="container-fluid p-0 m-0" style={{ minHeigth: "30" }}>
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong className='text-capitalize'>{alert.type === 'danger' ? 'OOPs' : ''}{alert.type === 'success' ? 'sucess' : ''}: </strong> {alert.msg}

                </div>
            </div>}
        </>
    )
}

export default Alert
