import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {

  const pathToResource = path.join(__dirname, 'vvv', 'index.html')

  fs.readFile(pathToResource, 'utf8', (err,content) => {
    if (err){
        console.log(err)
        return
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)
  })

})  

  



server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))