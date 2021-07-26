export default {
  global: {
    html: {
      height: '100%'
    },
    body: {
      padding: 0,
      margin: 0,
      height: '100%',
      color: 'black'
    },
    '#__next': {
      height: '100%',
      padding: [4, 4, 10, 10, 10, 10], //base, sm, md, lg, xl, 2xl
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: [1, 1, 1, 1, 1, 1]
    },
    '*': {
      wordBreak: 'break-word'
    }
  }
}
