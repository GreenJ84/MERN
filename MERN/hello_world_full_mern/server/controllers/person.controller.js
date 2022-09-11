module.exports.index = (req, res) => {
    // res.set('Access-Control-Allow-Origin', '*');
    res.json({message: "Hello World"});
}