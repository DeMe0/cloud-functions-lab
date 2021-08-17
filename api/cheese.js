module.exports = (req, res) => {

    // can add routes using if statements for the methods.
    // if method === "POST" then do X
    res.json({
        body: req.body,
        headers: req.headers,
        query: req.query,
        cookies: req.cookies,
        method: req.method
    })
}