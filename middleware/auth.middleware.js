const ensureAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        // User is authenticated
        return next();
    } else {
        // User is not authenticated, redirect to login or send unauthorized response
        return res.status(401).redirect('/login'); // Redirect to login page
    }
};

module.exports = ensureAuthenticated;