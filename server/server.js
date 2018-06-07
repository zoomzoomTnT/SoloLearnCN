// server/server.js.js

/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
/*cors: It prevents cross-origin request errors.*/
const cors = require('cors')
/*bodyparse.json: It is used to parse formdata in POST requests into req.bodyobject.*/
const bodyParser = require('body-parser')
/*helmet: Like a real helmet, armours our API to prevent attacks.*/
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const server = express()
const router = express.Router()
const url = "mongodb://localhost:27017/medium";/* ||　process.env.MONGODB_URI*/

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
    api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
    api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
    /*
    *  cloud_name: 'dbocn3bjn',
    api_key: '923691981675114',
    api_secret: 'cAlfNLZKG4bUPYxYTSfJnxK1iNU'
    * */
})

/** connect to MongoDB datastore todo*/

    mongoose.connect(url)


let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
server.use(cors())
server.use(bodyParser.json())
server.use(helmet())
//server.use('/static',express.static(path.join(__dirname,'static')))

server.use('/api', router)

/** start server */
server.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});


/*

TEST: GET A USER
curl --request GET \
  --url http://localhost:5000/api/user/5a92cf3f2dec79115c8fc78a
TEST: GET ALL ARTICLES
curl --request GET \
  --url http://localhost:5000/api/articles
TEST: GET AN ARTICLE
curl --request GET \
  --url http://localhost:5000/api/article/5a92e41abb04440888395e44
TEST: COMMENT ON AN ARTICLE
curl --request POST \
  --url http://localhost:5000/api/article/comment \
  --header 'content-type: application/json' \
  --data '{"comment": "dfdggd", "author_id": "5a92cf3f2dec79115c8fc78a", "article_id": "5a92e41abb04440888395e44"}'
TEST: CLAP AN ARTICLE
curl --request POST \
  --url http://localhost:5000/api/article/clap \
  --header 'content-type: application/json' \
  --data '{"article_id": "5a92e41abb04440888395e44"}'

*/