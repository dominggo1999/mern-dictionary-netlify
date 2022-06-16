import express from 'express';
import { powerThesaurusSynonyms } from '@/controllers/synonyms.controller.js';

const router = express.Router();

router.get('/:word', powerThesaurusSynonyms);

export default router;
