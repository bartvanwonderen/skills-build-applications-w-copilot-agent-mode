import express from 'express';
import './config/database.js';
import apiRoutes from './routes.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get('/api', (_request, response) => {
  response.json({ name: 'OctoFit API', baseUrl: apiBaseUrl });
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use('/api', apiRoutes);

app.use(
  (error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error('API request failed:', error);
  response.status(400).json({ error: 'Invalid request' });
  },
);

app.listen(port, () => {
  console.log(`OctoFit API listening at ${apiBaseUrl}`);
});