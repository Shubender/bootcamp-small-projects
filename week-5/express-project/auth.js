const basicAuth = require("basic-auth");

module.exports.auth = (req, res, next) => {
    const creds = basicAuth(req);
    if (!creds || creds.name != "321" || creds.pass != "321") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter admin / admin to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};
