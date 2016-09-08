import test from 'ava'
import random from './'

test('main', async t => {
  const repo = await random('egoist')
  t.truthy(repo.id)
})
