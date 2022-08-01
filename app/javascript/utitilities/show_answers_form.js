$(document).on('turbolinks:load', function(){
  $('.answers').on('click', '.edit-answer-link', function(e) {
    e.preventDefault()
    $(this).hide()
    const answerId = $(this).data('answerId')
    $('form#edit-answer-' + answerId).removeClass('hidden')
  })

  $('.question').on('click', '.edit-question-link', function(e) {
    e.preventDefault()
    $(this).hide()
    $('form#edit-question').removeClass('hidden')
  })
})
