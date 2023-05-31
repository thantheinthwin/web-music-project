import axios from 'axios';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const baseURL = "http://localhost:4000/";

export const validateUser = async (token) => {
    try {
        const res = await axios.get(`${baseURL}api/users/loginWithGoogle`, {
            headers : {
                Authorization : "Bearer " + token,
            }
        })
        return res.data;
    } catch (error) {
        return null;
    }
};

export const login = async (token) => {
    try {
        const res = await axios.get(`${baseURL}api/users/login`, {
            headers : {
                Authorization : "Bearer " + token,
            }
        })
    } catch (error) {
        return null;
    }
}

// export const login = async (userData) => {
//     const {email, password} = userData;

//     try {
//         const res = await fetch(`${baseURL}api/users/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email
//             })
//         })
//         return res.json();
//     } catch (error) {
//         return null;
//     }
// }

export const signup = async (userData, token) => {
    const {username} = userData;

    try {
        const res = await fetch(`${baseURL}api/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer " + token
            },
            body: JSON.stringify({
                username
            })
        })
        return res.json();
    } catch (error) {
        return null;
    }
}

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${baseURL}api/users/getUsers`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const getAllArtists = async () => {
    try {
        const res = await axios.get(`${baseURL}api/artists/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const getAllAlbums = async () => {
    try {
        const res = await axios.get(`${baseURL}api/albums/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const getAllSongs = async () => {
    try {
        const res = await axios.get(`${baseURL}api/songs/getAll`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const removeUser = async (userId) => {
    try {
        const res = await axios.delete(`${baseURL}api/users/deleteUser/${userId}`);
        return res;
    } catch (error) {
        return null;
    }
};

export const removeSong = async (songId) => {
    try {
        const res = await axios.delete(`${baseURL}api/songs/delete/${songId}`);
        return res;
    } catch (error) {
        return null;
    }
};

export const removeAlbum = async (albumId) => {
    try {
        const res = await axios.delete(`${baseURL}api/albums/delete/${albumId}`);
        return res;
    } catch (error) {
        return null;
    }
}