import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Handle SPA routing - return index.html for all non-static requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Choose the port and start the server
const PORT = process.env.PORT || 3234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
