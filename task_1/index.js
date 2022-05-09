import config from './config/app.js'
import app from './app.js'

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`app started on port http://localhost:${PORT}`)
});