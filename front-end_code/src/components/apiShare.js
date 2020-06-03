export const create = (userId, token, share) => {
    return fetch(`${process.env.REACT_APP_API_URL}/share/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: share
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// export const list = () => {
//     return fetch(`${process.env.REACT_APP_API_URL}/posts`, {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// with pagination
export const list = page => {
    return fetch(`${process.env.REACT_APP_API_URL}/shares/?page=${page}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleShare = shareId => {
    return fetch(`${process.env.REACT_APP_API_URL}/share/${shareId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listByUser = (userId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/shares/by/${userId}`, {
        method: "GET",
        headers:  {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const remove = (shareId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/share/${shareId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (shareId, token, share) => {
    console.log(shareId, token, share);
    return fetch(`${process.env.REACT_APP_API_URL}/share/${shareId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: share
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// export const like = (userId, token, postId) => {
//     return fetch(`${process.env.REACT_APP_API_URL}/post/like`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ userId, postId })
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// export const unlike = (userId, token, postId) => {
//     return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ userId, postId })
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// export const comment = (userId, token, postId, comment) => {
//     return fetch(`${process.env.REACT_APP_API_URL}/post/comment`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ userId, postId, comment })
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// export const uncomment = (userId, token, postId, comment) => {
//     return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ userId, postId, comment })
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };


