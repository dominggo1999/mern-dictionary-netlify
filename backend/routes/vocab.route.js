import express from 'express';
import { vocabularyComDefinitions } from '@/controllers/vocab.controller.js';

const router = express.Router();

router.get('/:word', vocabularyComDefinitions);

export default router;
