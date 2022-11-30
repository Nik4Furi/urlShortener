# <h1 id="urlShortener"> urlShortener </h1>
### A react app, which is work with the help of  <a href="https://github.com/Nik4furi/url-shortener-api">url-shortener-api</a>
urlShortener, is react app , which is used for short any kind of urls ,this url basically easily understand and remberable. But any url valid or save upto last 24 hours.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >urlShortener Looks Like</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#colorsRef" >Color References</a></p>
####   <p><a href="#apiRef" >api References</a></p>
####   <p><a href="#components" >components/Examples</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#relatedProjects" >Related Projects</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/urlShortener?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/urlShortener?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/urlShortener)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/urlShortener?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/urlShortener) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/urlShortener)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/urlShortener)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/urlShortener)

## <h2 id="looks" >urlShortener looks like</h2>


<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203487604-039a41aa-c4ae-4fad-b76e-1b72ce7f0f78.png" width="400" height="" alt="urlShortener_home"/> 

</p>

<a href="#urlShortener">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203494510-77735dad-2653-4835-8d86-8915b384abeb.gif" width="500" height="" alt="urlShortener_home"/>
      
 </p> 


<a href="#urlShortener">Go Home </a>


## <h2 id="stack" >Tech Stack </h2>


**Client:** React, Bootstrap <a href="https://github.com/Nik4furi/url-shortener-api">(url-shortener)</a>
**Server:** NodeJS, ExpressJS, MongoDB <a href="https://github.com/Nik4furi/url-shortener-api">(url-shortener-api)</a>

<a href="#urlShortener">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/urlShortener
```

Go to the project directory

```bash
  cd urlShortener
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

<a href="#urlShortener">Go Home </a>


## <h2 id="colorsRef">Color Reference </h2>

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color |  #dc3545 |

<a href="#urlShortener">Go Home </a>



## <h2 id="apiRef">API Reference </h2>

#### Fetching urls from database

```http
  GET /api/urls/FetchUrls
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `get` | Fetch all the urls from database |

#### Post/Add url into database

```http
  POST /api/urls/PostUrl
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -     | `POST` | Add a url, input by the users |
`


<a href="#urlShortener">Go Home </a>


## <h2 id="components" >Components Examples  </h2>

Show messages using **Alert** Component

```javascript
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

```

**Error** component for show error page, after entering any kind of end points in url tab

```javascript
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

```

**Form** component, used for filling the form for adding url into database

```javascript
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

```

**Loader** component to show method is processing

```javascript

import React from 'react'

function Loader() {
  return (
    <>
      <div className="container my-2 mx-1 d-inline-block">
        <img src="img/loader.gif" alt="loader" className="img-fluid w-25" />
      </div>
    </>
  )
}

export default Loader

```
**Urls** component to show all urls data from database

```javascript
import React, { useContext,useEffect } from 'react'

import UrlsContext from '../UrlsContexts/UrlsContext'

function Urls() {
    //--------------------------Context level variables validations or contents ------------X 
    const { FetchUrls, urls } = useContext(UrlsContext);

    //---------------Module level variables, validations or contents------------X
    useEffect(() => {
        FetchUrls()
        // eslint-disable-next-line
    }, [])

   

   
    return (
        <>
            <div className="container my-3">
                <table className="table table-hover">
                    <thead className="text-bg-dark">
                        <tr>
                            <th scope="col">FullUrl</th>
                            <th scope="col">ShortUrl</th>
                        </tr>
                    </thead>
                    <tbody>

                        {urls.length === 0 ?
                            <tr>
                                <th scope="row">-</th>
                                <td>No urls is here enter and pic new urls shortner </td>

                            </tr> : urls.map(
                                (url) => {
                                    return (
                                        <tr key={url._id} >
                                            <td><a href={`${url.fullurl}`} target="_blank" rel="noopener noreferrer">{url.fullurl}</a></td>
                                            <td><a href={`${url.fullurl}`} target="_blank" rel="noopener noreferrer">{url.shorturl}</a></td>

                                        </tr>)
                                }
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Urls

```

<a href="#urlShortener"> Go Home </a>


## <h2 id="features">Features </h2>

- Delete automatically any url which is 24 hours old
- React-router-dom used for one page app/ not reload page during user interactions
- Use Components

<a href="#urlShortener">Go Home </a>



## <h2 id="relatedProjects" >Related Projects </h2>

Here are some related projects

[url-shortener-api](https://github.com/Nik4Furi/url-shortener-api)

[inotes](https://github.com/Nik4Furi/inotes)