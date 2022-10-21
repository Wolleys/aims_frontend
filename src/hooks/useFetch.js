import { useEffect, useState } from 'react'
import instance from '../api/baseURL'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isAuth, setIsAuth] = useState({ firstName: "", lastName: "", status: null, avatar: null });

    useEffect(() => {
        setLoading(true)
        instance.request(url).then((response) => {
            console.log(response.data)
            if (response.data.error) {
                setIsAuth({ ...isAuth, status: false });
            } else {
                setIsAuth({
                    id: response.data.user.id,
                    status: response.data.auth,
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    avatar: response.data.user.avatar,
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