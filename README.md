# random-starred-repo

[![NPM version](https://img.shields.io/npm/v/random-starred-repo.svg?style=flat-square)](https://npmjs.com/package/random-starred-repo) [![NPM downloads](https://img.shields.io/npm/dm/random-starred-repo.svg?style=flat-square)](https://npmjs.com/package/random-starred-repo) [![Build Status](https://img.shields.io/circleci/project/egoist/random-starred-repo/master.svg?style=flat-square)](https://circleci.com/gh/egoist/random-starred-repo)

> Return a random repo from the ones starred by you.

## Install

```bash
$ npm install --save random-starred-repo
```

## Usage

```js
const random = require('random-starred-repo')

random('egoist')
  .then(repo => {
    console.log(repo)
    //=> {name: 'react', id: ..., owner: ...}
  })
```

## API

### randomStarredRepo(username, [access_token])

#### username

Type: `string`

GitHub username

#### access_token

Type: `string`  

GitHub private token.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
