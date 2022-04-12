import posts from '../data/tuits.js';

let tuits = JSON.parse(JSON.stringify(posts));


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuitsByType = (type) => {
    return tuits.filter(u => u.type === type);
}

const findAllTuits = (req, res) => {
    const type = req.query.type;
    if (type) {
        res.json(findTuitsByType(type));
        return;
    }
    res.json(tuits);
}

const findTuitById = (req, res) => {
    const tuitId = req.params.tid;
    const tuit = tuits.find(u => u._id === tuitId);
    res.json(tuit);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params['tid'];
    tuits = tuits.filter(usr =>
        usr._id !== tuitId);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitId = req.params['tid'];
    const updatedTuit = req.body;
    tuits = tuits.map(usr =>
        usr._id === tuitId ?
            updatedTuit :
            usr);
    res.sendStatus(200);
}

const tuitController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

export default tuitController;

// const tuitsDao = require("../database/tuits/tuits-dao.js")
// let tuits = require("./tuits.json");
//
// const findAllTuits = async (req, res) => {
//     const tuits = await tuitsDao.findAllTuits();
//     res.json(tuits);
// }
// const createTuit = async (req, res) => {
//     const newTuit = req.body;
//     await tuitsDao.createTuit(newTuit);
//     const tuits = await tuitsDao.findAllTuits();
//     // newTuit['_id'] = (new Date()).getTime()+'';
//     // tuits = [
//     //   newTuit,
//     //   ...tuits
//     // ];
//     res.json(tuits);
// }
// const deleteTuit = async (req, res) => {
//     const tuitId = req.params['tid'];
//     // tuits = tuits.filter(t => t._id !== tuitId);
//     await tuitsDao.deleteTuit(tuitId)
//     const tuits = await tuitsDao.findAllTuits()
//     res.json(tuits);
// }
// const likeTuit = async (req, res) => {
//     const tuitId = req.params['tid'];
//     let tuit = await tuitsDao.findTuitById(tuitId)
//     tuit.likes++;
//     await tuitsDao.updateTuit(tuitId, tuit)
//     const tuits = tuitsDao.findAllTuits()
//     // tuits = tuits.map(t => {
//     //   if (t._id === tuitId) {
//     //     return {
//     //       ...t,
//     //       likes: t.likes + 1
//     //     };
//     //   } else {
//     //     return t;
//     //   }
//     // })
//     res.json(tuits);
// }
//
// const unlikeTuit = (req, res) => {
//     const tuitId = req.params['tid'];
//     tuits = tuits.map(t => {
//         if (t._id === tuitId) {
//             return {
//                 ...t,
//                 likes: t.likes - 1
//             };
//         } else {
//             return t;
//         }
//     })
//     res.json(tuits);
// }
//
// const updateTuit = async (req, res) => {
//     const tuitId = req.params['tid'];
//     const tuit = req.body;
//     await tuitsDao.updateTuit(tuitId, tuit)
//     const tuits = await tuitsDao.findAllTuits()
//     // tuits = tuits.map(t => {
//     //   if (t._id === tuitId) {
//     //     return tuit;
//     //   } else {
//     //     return t;
//     //   }
//     // })
//     res.json(tuits);
// }
//
//
// const tuitsController = (app) => {
//     app.get('/api/tuits', findAllTuits);
//     app.post('/api/tuits', createTuit);
//     app.delete('/api/tuits/:tid', deleteTuit);
//     app.put('/api/tuits/:tid/like', likeTuit);
//     app.put('/api/tuits/:tid/unlike', unlikeTuit);
//     app.put('/api/tuits/:tid', updateTuit);
// }
//
// module.exports = tuitsController;
