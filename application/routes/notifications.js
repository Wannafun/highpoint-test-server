var models = require('../Model');


exports.getList = function(req, res) {
  var notifications = models.notifications.getList([1, 2, 3]);

  res.json(notifications);
};
