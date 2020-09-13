module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "AAGDSGDHFJFJEJF3858483HD3HYD8329E9389EYD893YE8398285HF",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000",
}