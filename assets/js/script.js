
$(document).ready(function() {

  /* make image paragraph styling possible */
  $("img").each(function() {
    var par = $(this).parent()
    var parpar = $(this).parent().parent()
    if (par.is("p")) {
      par.before('<div class="clearfix"></div>')
      par.addClass('img')
    }
    if (par.is("a")) {
      if (parpar.is("p")) {
        parpar.before('<div class="clearfix"></div>')
        parpar.addClass('img')
      }
    }
  })

  $("video").each(function() {
    $(this).wrap('<div class="video"></div>')
  })
  $("div.video").each(function() {
    var p = $(this).next()
    if (p.is("p")) {
      $(this).append(p)
    }
  })

  /* add top-ul for CSS styling and "span" wrap top li texts */
  $("ul").each(function() {
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

  $("#header i.fa-bars").on('click', () => {
    $('#sidebar').toggleClass('show-menu')
    $('#content').toggleClass('show-menu')
  })
  $(window).resize(() => {
    $('#sidebar').removeClass('show-menu')
    $('#content').removeClass('show-menu')
  })
})

