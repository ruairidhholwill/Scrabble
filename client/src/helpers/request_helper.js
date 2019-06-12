const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then(response => response.json())
    .catch(error => console.log("Error in get:", error))
};

RequestHelper.prototype.post = function(payload){
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .catch(console.error)
}

module.exports = RequestHelper;
