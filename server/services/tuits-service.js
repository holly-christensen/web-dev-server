import axios from 'axios';

// const TUITS_API = 'https://web-dev-server-hlsp22.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    console.log('in service: '+tuit)
    const newTuit = {
        _id: (new Date()).getTime() + '',
        topic: null,
        postedBy: {
            username: "User Name"
        },
        liked: false,
        verified: false,
        handle: "userhandle",
        logoImage: "images/default-profile.jpeg",
        avatarImage: "images/default-profile.jpeg",
        time: "now",
        title: null,
        tuit: tuit,
        stats: {
            retuits: 0,
            likes: 0,
            comments: 0,
            dislikes: 0
        }
    }
    const response = await axios.post(TUITS_API, newTuit)
    return response.data;
}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const findTuitById = async (tuit) => {
    const response = await axios.get(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}