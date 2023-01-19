import { useEffect, useState } from "react";

const useFetchGet = (url) => {
    const [beers, setBeers] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setBeers(data);
        });
    }, [url]);

    return beers;
}

export default useFetchGet;