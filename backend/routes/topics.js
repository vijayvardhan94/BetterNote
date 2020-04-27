const router = require('express').Router();
let Topic = require('../models/topic.model');

router.route('/').get((req, res) => {
  Topic.find()
    .then(topics => res.json(topics))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const topicname = req.body.topicname;

  const newTopic = new Topic({topicname});

  newTopic.save()
    .then(() => res.json('Topic added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;