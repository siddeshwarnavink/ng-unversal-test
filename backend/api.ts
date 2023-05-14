import * as express from 'express';

const router = express.Router();

// Fake database
let myChecklist = [
    { 'id': '1', 'content': 'Learn typescript' },
    { 'id': '2', 'content': 'Learn Angular' }
];

router.get('/checklist', (req, res) => {
    res.send(myChecklist);
});

router.post('/checklist', (req, res) => {
    myChecklist.push(req.body);
    res.send({});
});

router.get('/checklist/:id', (req, res) => {
    res.send(myChecklist.find(checklistItm => checklistItm.id === req.params.id));
});

router.delete('/checklist/:id', (req, res) => {
    myChecklist = myChecklist.filter(checklistItm => checklistItm.id !== req.params.id);
    return res.send({});
});

export default router;