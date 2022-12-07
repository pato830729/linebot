import axios from 'axios'
import flex from './flex.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=H')
    const course = data.find(courses => courses.name.includes(event.message.text))
    if (course) {
      const replyFlex = JSON.parse(JSON.stringify(flex))
      replyFlex.hero.action.uri = course.srcWebsite
      replyFlex.body.contents[0].text = course.name
      replyFlex.body.contents[1].text = course.name_eng
      replyFlex.body.contents.push(
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '類型',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: course.type,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '地址',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: course.address,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        })
      if (course.facebook === undefined) {
        replyFlex.footer.contents[0] = {
          type: 'text',
          text: '粉絲專頁',
          style: 'normal',
          align: 'center',
          weight: 'regular',
          size: 'md',
          color: '#C0C0C0'
        }
      } else { replyFlex.footer.contents[0].action.uri = course.facebook }
      replyFlex.footer.contents[1].action.uri = course.srcWebsite
      event.reply({
        type: 'flex',
        altText: '查詢結果',
        contents: replyFlex
      })
      // event.reply([course.CLASSNAME, course.URL])
    } else {
      event.reply('對不起~我聽不懂你在說什麼qq')
    }
  } catch (error) {
    event.reply('發生錯誤')
  }
}
