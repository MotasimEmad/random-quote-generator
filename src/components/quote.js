import React, { useEffect, useState } from 'react';

function Quote() {

    const api = 'http://api.quotable.io/random';

    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState({});
    const handleApi = () => {
        fetch(api)
        .then((response) => {
            if (response.status !== 200) {
                setLoading(false);
                throw Error('could not fetch the data');
            }

            return response.json();
        })

        .then((response) => {
            setLoading(false);
            setQuote(response);
        })
    }

    useEffect(() => {
        handleApi();
    }, []);
    return (
        <section>
            { loading && <div className="loading-container">loading ... </div> }
            { !loading && <div className="quote-container">
                <p>{quote.content}</p>
                <h1>{quote.author}</h1>

                <button onClick={handleApi}>Generator Quote</button>
            </div> }
        </section>
    )
}

export default Quote