module.exports = {

  MONGODB_URI: 'mongodb+srv://yemifrancisolayemi:K@uffm@nnRegis9696@myfirstcluster.cjlqwye.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstCluster'
  db: {
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/node-auth'
  },
  JwtSecret: process.env.JWT_SECRET || 'super_secret'
}