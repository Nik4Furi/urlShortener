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
