import React, { useState, useContext } from 'react'

import UrlsContext from '../UrlsContexts/UrlsContext';

import Loader from './Loader';

function Form(props) {
    //--------------------------Context level variables validations or contents ------------X    
    const { PostUrl,response } = useContext(UrlsContext);

    //---------------Module level variables, validations or contents------------X
    const [form, setForm] = useState('') //To handle the users input urls
    const [loading, setLoading] = useState(false) //To loader iterting for better UX

    //------------------------Props level validations, variables or contents use for this particular module-------X
    const { ShowAlert } = props

    //-------------------Starting from here, to creating the methods or functions for handling--------------X
    const OnChange = (e) => setForm(e.target.value) //handling onchange during the user inputs

    const handleSubmit = async (e) => { //Submit form, adding a url into database
        try {
            e.preventDefault();

            setLoading(true)
            PostUrl(form)

            //Here we iterating the alerts for better user experience
            if (response.success === true) {
                ShowAlert(response.msg, 'success')
                setLoading(false)
                setForm('')
            }
            else if (response.success === false) {
                ShowAlert(response.msg, 'danger')
                setLoading(false)
                setForm(form)
            }

        } catch (error) { ShowAlert('Something went wrong, Plz try again letter', 'danger') }
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-10">
                    <form method='POST' className="d-flex" role="search" onSubmit={handleSubmit}  >
                        <input className="form-control me-2 border border-success rounded" type="url" aria-label="url" name="url" value={form} onChange={(e) => OnChange(e)} required minLength={5} placeholder='Enter a url to short it' />
                        <button className={`btn btn-danger ${loading===true ? 'disabled':''}`} type="submit">shortUrl</button>
                    </form>
                    </div>
                    <div className="col-2">
                {loading === true ? <Loader /> : ''}</div>
                </div>
            </div>

        </>
    )
}

export default Form
