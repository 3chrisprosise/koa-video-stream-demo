const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('videoPlayer', {
    title: 'Hello Koa 2!'
  })
});

module.exports = router;
