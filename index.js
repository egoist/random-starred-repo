'use strict'
const got = require('got')
const getCount = require('starred-count')

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = function (username, token) {
  if (!username || typeof username !== 'string') {
    throw new TypeError('Expected username to be a string')
  }

  function getRandom(total) {
    const query = {
      per_page: 1,
      page: getRandomInt(1, total + 1)
    }
    if (token) {
      query.access_token = token
    }
    return got.get(`https://api.github.com/users/${username}/starred`, {
      query,
      json: true
    }).then(res => res.body[0])
  }

  return getCount(username, token).then(getRandom)
}
