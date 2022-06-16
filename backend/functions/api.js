import dotenv from 'dotenv';
import express from 'express';
import serverless from 'serverless-http';
import vocabRouter from '@/routes/vocab.route.js';
import youdaoRouter from '@/routes/youdao.route.js';
import hippoRouter from '@/routes/hippo.route.js';
import audioRouter from '@/routes/audio.route.js';
import synonymsRouter from '@/routes/synonyms.route.js';

dotenv.config();
const app = express();

const API_URL = '/.netlify/functions/api';

app.use(`${API_URL}/vocab`, vocabRouter);
app.use(`${API_URL}/youdao`, youdaoRouter);
app.use(`${API_URL}/hippo`, hippoRouter);
app.use(`${API_URL}/audio`, audioRouter);
app.use(`${API_URL}/synonyms`, synonymsRouter);

export const handler = serverless(app);
