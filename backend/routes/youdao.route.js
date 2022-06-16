import express from 'express';
import { indoDefinitions } from '@/controllers/youdao.controller.js';

const router = express.Router();

router.get('/:word', indoDefinitions);

export default router;
