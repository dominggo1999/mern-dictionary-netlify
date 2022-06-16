import express from 'express';
import { googleTTS } from '../controllers/audio.controller.js';

const router = express.Router();

router.get('/:word', googleTTS);

export default router;
