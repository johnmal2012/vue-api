import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3131;

app.use(cors());

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'});
});

app.use((req, res) => res.status(404).send({code: '404', message: 'no found'}));

app.listen(port, () => console.log('server started on port', port));
