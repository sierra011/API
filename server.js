import app from './src/app.js'


//porta que sera usada 
const PORT = 3000


app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})



