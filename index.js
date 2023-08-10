const app = require('./src/server')

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log('server is connected at port:', PORT))