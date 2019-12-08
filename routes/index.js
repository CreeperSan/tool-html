const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: {
      content : [
        {
          category_name : '🎵',
          items : [
            {
              title : '四线谱指法转换',
              description : '转换为带指法的四线谱',
              background_url : '/res/index/img_thumbnail_display_hex_clock.jpg',
              url : '/music/text-to-fingering-stave'
            }
          ]
        }
      ]
    }
  })
})

module.exports = router
