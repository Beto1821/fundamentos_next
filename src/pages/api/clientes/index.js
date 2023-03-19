export default function handler(req, res) {
    
    if(req.method === "GET") {
        handlerGet(req, res)
    } else {
        res.status(404).send()
    }
}    

function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Beto',
        idade: 47
    })
}