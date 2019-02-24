module.exports = function () {
  var data = {};

  data.OneList = [];
  data.OneList.push({
    id: 1,
    body: 'foo'
  });
  data.TwoList = [];
  data.TwoList.push({
    id: 1,
    body: 'baz',
    postId: 1
  });
  return data;
}