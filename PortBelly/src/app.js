const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 4200;

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  res.json(text);
});
const assistant = new AssistantV1({
  username: 'portbelly',
  password: '6KpPCPGGQiIdZOx07MQIVn-KdMBsJB32XLvg9royZA_h',
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/96b5c926-1af5-4923-a409-722e883517c5',
  version: '2018-02-16',
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id:'<workspace_id>',
    context,
  };


  assistant.message(params, (err, response) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});



app.listen(port, () => console.log(`Running on port ${port}`));
