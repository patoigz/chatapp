const { Router } = require('express');
const pkg = require('../../package.json');

const router = Router();

// version route
router.get('/version', (req, res, next) => {
    return res.send(`chatapp version: ${pkg.version}`)
})

// 404
router.use((req, res, next) => {
    return res.redirect('/');
})

module.exports = router;
