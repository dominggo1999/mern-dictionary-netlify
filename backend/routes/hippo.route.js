import express from 'express';
import { hippoSentences } from '@/controllers/hippo.controller.js';

const router = express.Router();

router.get('/:word', hippoSentences);

export default router;
