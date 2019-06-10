const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then(response => response.json())
    .catch(error => console.log("Error in get:", error))
};

module.exports = RequestHelper;
