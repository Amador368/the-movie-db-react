import {useState, useEffect} from 'react';

export default function useFetch(url, options){
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {

            } catch (err) {
                
            }
        })
    }, [])
}