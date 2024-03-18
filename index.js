const input = document.getElementById('num')
const container = document.querySelector('.container')

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const generateWord = (n) => {
  let text = ''
  for (let i = 0; i < n; i++) {
    let random = (Math.random() * (str.length - 1)).toFixed(0)
    text += str[random]
  }
  return text
  //   let text = ''

  //   console.log(text)
}

// generateWord(5)
const generatePara = () => {
  let numOfWords = Number(input.value)
  let data = ''
  for (let i = 0; i < numOfWords; i++) {
    //   the length of each word should random
    const randomWord = (Math.random() * 15).toFixed(0)
    data += generateWord(randomWord)
    data += ' '
  }
  const para = document.createElement('p')
  para.innerText = data
  para.setAttribute('class', 'paras')
  container.append(para)
}
