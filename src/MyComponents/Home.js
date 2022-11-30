import React from 'react'
import Form from './Form'
import Urls from './Urls'

function Home(props) {
  const {ShowAlert} = props
  return (
    <>
      <div className="container my-4">
        <h1>Welcome in <span className="text-danger">Url-Shortner!</span></h1>
        <p className="lead">Type the url and get the its into <span className="text-danger">short-url</span> .Also it is easy to use and understandable.</p>

        {/* Form component to post the url  */}
        <Form ShowAlert={ShowAlert} />

        {/* Table of the content to show it  */}
        <Urls />
      </div>
    </>
  )
}

export default Home
