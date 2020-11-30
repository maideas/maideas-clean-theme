
$(document).ready(function() {

  /* add top-ul for CSS styling and "span" wrap top li texts */
  $("#sidebar-box ul").each(function() {
    if (!$(this).parent().is("li")) {
      if ($(this).has("li").has("ul").length) {
        $(this).addClass("top-ul")
        $(this).children("li").each(function() {
          if (!$(this).contents().first().is("ul")) {
            $(this).contents().first().wrap('<span class="top-li"></span>')
          }
        })
      }
    }
  })

  $("#header i.fas").on('click', () => {
    $(window).scrollTop(0)
    $('#sidebar').toggleClass('show-menu')
    $('#content').toggleClass('show-menu')
    $("#header i.fas").toggleClass('show-icon')
  })

  $("a.show-nav-bar").on('click', () => {
    if ($(window).width() < 900) {
      $(window).scrollTop(0)
      $('#sidebar').addClass('show-menu')
      $('#content').addClass('show-menu')
      $("#header i.fa-bars").removeClass('show-icon')
      $("#header i.fa-times").addClass('show-icon')
    }
  })

  $(window).resize(() => {
    if ($(window).width() >= 900) {
      $('#sidebar').removeClass('show-menu')
      $('#content').removeClass('show-menu')
      $("#header i.fa-bars").addClass('show-icon')
      $("#header i.fa-times").removeClass('show-icon')
    }
  })
})

