import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import compression from 'compression';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('etag', 'strong');
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


const PORT = process.env.PORT || 3123;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});