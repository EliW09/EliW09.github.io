const $lines = $('.prompt p')
const $alines = $('.aboutprompt p')
$alines.hide()
$lines.hide()
const lineContents = new Array()

const terminal = function () {
  $('#p1').text('cd Home')
  $('#p2').text('Welcome to my portfolio')
  const skip = 0
  const typeLine = function (idx) {
    idx == null && (idx = 0)
    const element = $lines.eq(idx)
    let content = lineContents[idx]
    if (typeof content === 'undefined') {
      $('.skip').hide()
      return
    }
    let charIdx = 0

    const typeChar = function () {
      const rand = Math.round(Math.random() * 150) + 25

      setTimeout(function () {
        const char = content[charIdx++]
        element.append(char)
        if (typeof char !== 'undefined') {
          typeChar()
        } else {
          element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>')
          element.removeClass('active')
          element.addClass('done')
          typeLine(++idx)
        }
      }, skip ? 0 : rand)
    }
    content = 'echo "' + content + '"'
    element.append('~$ ').addClass('active')
    typeChar()
  }

  $lines.each(function (i) {
    lineContents[i] = $(this).text()
    $(this).text('').show()
    $alines.hide()
  })

  typeLine()
}

const aboutTerminal = function () {
  $('#p3').text('cd About')
  $('#p4').text('All about me...')
  const skip = 0
  const typeLine = function (idx) {
    idx == null && (idx = 0)
    const element = $alines.eq(idx)
    let content = lineContents[idx]
    if (typeof content === 'undefined') {
      $('.skip').hide()
      return
    }
    let charIdx = 0

    const typeChar = function () {
      const rand = Math.round(Math.random() * 150) + 25

      setTimeout(function () {
        const char = content[charIdx++]
        element.append(char)
        if (typeof char !== 'undefined') {
          typeChar()
        } else {
          element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>')
          element.removeClass('active')
          element.addClass('done')
          typeLine(++idx)
        }
      }, skip ? 0 : rand)
    }
    content = 'echo "' + content + '"'
    element.append('~$ ').addClass('active')
    typeChar()
  }

  $alines.each(function (i) {
    lineContents[i] = $(this).text()
    $(this).text('').show()
    $lines.hide()
  })

  typeLine()
}

const showLand = () => {
  if ($("span:contains('cd Home')")) {
    console.log('test')
  }
}

showLand()

module.exports = {
  terminal,
  aboutTerminal
}
