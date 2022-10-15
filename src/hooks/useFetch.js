import { useEffect, useState } from 'react'
import instance from '../api/baseURL'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isAuth, setIsAuth] = useState({ userName: "", id: 0, status: false });

    useEffect(() => {
        setLoading(true)
        instance.request(url).then((response) => {
            console.log(response.data)
            if (response.data.error) {
                setIsAuth({ ...isAuth, status: false });
            } else {
                setIsAuth({
                    firstName: response.data.firstName,
                    id: response.data.id,
                    status: true,
                });
            }
            setData(response.data)
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return { data, error, loading, setData, isAuth, setIsAuth }
}

export default useFetch;