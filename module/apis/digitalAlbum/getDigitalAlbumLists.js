module.exports = ({ request, method = 'get', params = {}, option = {} }) => {
  let options = Object.assign(option, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params,
  });
  return request('/v8/fcg-bin/musicmall.fcg', method, options);
}