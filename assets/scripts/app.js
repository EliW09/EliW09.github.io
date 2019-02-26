'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const main = require('./main.js')

$(() => {
  $.runOnce = true;
  $.runOnce2 = true;
  $(document).ready(main.terminal)
  $('#aboutme').on('click', main.aboutTerminal)
  $('#home').on('click', main.terminal)

  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('.allSkills').position().top) if($.runOnce == true) {
        main.aboutTerminal()
        $.runOnce = false
    }
})
})
