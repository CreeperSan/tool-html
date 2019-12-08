const router = require('koa-router')()

router.prefix('/music')

router.get('/text-to-fingering-stave', async (ctx, next) => {
    await ctx.render('music/text-to-fingering-stave')
})


module.exports = router