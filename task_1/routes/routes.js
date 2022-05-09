import express from 'express'
import controller from '../controllers/Controller.js'

const router = express.Router();

router.post('/track', controller.trackBody);

router.get('/count', controller.getCount);

router.get('*', (req, res) => {
    res.status(404).send('Not available request...')
});

export default router;