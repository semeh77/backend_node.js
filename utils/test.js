import path from 'node:path'

export function testPath(dir) {

  const relPathToResource = path.join(dir, 'BAKEND2', 'index.html')
  console.log('testPath: ', relPathToResource)
}