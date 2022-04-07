import posts from '../tuits.js';

let tuits = JSON.parse(JSON.stringify(posts));


const tuitController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

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


export default tuitController;
