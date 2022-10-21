import instance from "../baseURL";

export const getAllOrganizations = async () => {
    const response = await instance
        .get("/organizations")
        .then(({ data }) => data)
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};
