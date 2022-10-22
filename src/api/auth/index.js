import instance from "../baseURL";

export const login = async (data) => {
    const response = await instance
        .post("/organizations/login", data)
        .then((data) => data)
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};

export const validateAuth = async () => {
    const response = await instance
        .get("/auth/validate")
        .then((data) => data)
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};

export const logout = async () => {
    const response = await instance
        .post("/auth/logout")
        .then((data) => data)
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};
