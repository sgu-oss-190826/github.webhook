var express = require('express');
var exec = require("child_process").exec;
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let pr = req.body.pull_request;
    
  if(pr && req.body.action === 'opened') {
    let content = {
        text: `Pull Request가 도착했습니다\n${pr.html_url}`
    };

    let url = process.env.SLACK_INCOMING;
    console.log('to slack', url);

    let curl = `curl -X POST -H 'Content-type: application/json' --data '${JSON.stringify(content)}' ${url}`

    exec(curl, function (error, stdout, stderr) {
        console.log(stderr);
      });
  }

  res.send('{}');
});

module.exports = router;
