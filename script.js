
  // *****************************Search Function************************************

$(function() {
    $("input").on("input.highlight", function() {
      // Determine specified search term
      var searchTerm = $(this).val();
      // Highlight search term inside a specific context
      $("#About Me").unmark().mark(searchTerm);
    }).trigger("input.highlight").focus();
  });


//******************************ScrollSpy Smooth****************************************

$(".collapse navbar-collapse li a[href^='#']").on('click', function(e) {
    var target = this.hash;
  
    e.preventDefault();
  
    var navOffset = $('#navbar-header').height();
  
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 300, function() {
      return window.history.pushState(null, null, target);
    });
  });
  
