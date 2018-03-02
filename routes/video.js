const fs = require('fs');
const path = require('path');

const { getVedioStream, checkFile }= require('../services/videoStream');

const router = require('koa-router')();

router.prefix('/video');

router.get('/', async (ctx, next) => {
   await ctx.render('videoPlayer');
   next()
});

router.get('/streaming/:filename', checkFile, getVedioStream);
router.get('/streaming/', checkFile, getVedioStream);

module.exports = router;
