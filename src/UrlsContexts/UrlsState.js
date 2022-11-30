
import React, { useState } from 'react'

import UrlsContext from './UrlsContext'

function UrlsState(props) {
    const host = `http://localhost:8000`;
   

    const [response, setResponse] = useState(''); //response our functions

    const urlsInitial = [];

    const [urls, setUrls] = useState(urlsInitial)

    const FetchUrls = async () => { //Fetch the urls from database
        try {
            let data = await fetch(`${host}/api/urls/FetchUrls`);
            let res = await data.json()

            setUrls(res.urls)

            setResponse(res)

        } catch (error) {
            return setResponse(error)
        }
    }

    const PostUrl = async (url) => { //Add url into database
        try {
            let data = await fetch(`${host}/api/urls/PostUrl`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            })
            let res = await data.json()

            let newUrl = res.urls         

            if (newUrl !== undefined) { setUrls(urls.concat(newUrl)) }

            return setResponse(res)

        } catch (error) {
            return setResponse(error)
        }
    }


    return (
        <UrlsContext.Provider value={{ PostUrl, FetchUrls, response, urls }}>
            {props.children}
        </UrlsContext.Provider>
    )
}

export default UrlsState
