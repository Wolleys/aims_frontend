import instance from './baseURL';

export const Login = (data) => {
    return instance.post("/organizations/login", data).then((data) => data).catch(err => {
        throw new Error(err)
    })
}