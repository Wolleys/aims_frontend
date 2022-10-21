import React from "react";
import { Organization } from "../../queries";

function Tab1() {
    const { data, error, isLoading, isError } = Organization();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <>
            <h1>Overview</h1>
            {
                data?.organizations.map((post, index) => {
                    return <li key={index}>{post.organizationName}</li>
                })
            }
        </>
    );
}

export default Tab1;
