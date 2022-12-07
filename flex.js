export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://travelimg.yam.com/DATA/ARTICLE/20190515141140442.jpg',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'regular',
        size: 'md'
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [{
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'uri',
        label: '粉絲專頁',
        uri: 'https://lnecorp.com'
      }
    },
    {
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'uri',
        label: '網站連結',
        uri: 'https://linecorp.com'
      }
    },
    {
      type: 'box',
      layout: 'vertical',
      contents: [],
      margin: 'sm'
    }
    ],
    flex: 0
  }
}
