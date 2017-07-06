jQuery(document).ready(function($) {
  $('.messages-right > .central-message:eq(2) > .photo-div').hover(
    function() {
      $('.invis-position').css({
        "display": "block"
      });
    },
    function() {
      $('.invis-position').hover(
        function() {},
        function() {
          $(this).css({
            "display": "none"
          });
        }
      );
    }
  );


  //my marketplace search

  $('.live-search-list > .search-item').each(function() {
    $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  $('.live-search-box').on('keyup', function() {
    var searchTerm = $(this).val().toLowerCase();
    $('.live-search-list > .search-item').each(function() {
      if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


  //my marketplace sort's

  //1

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Seller') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu5 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .central-message:has(.seller)').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Buyer') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu5 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .central-message:has(.buyer)').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Publisher') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu5 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .central-message:has(.publisher)').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'All') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu5 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').show();
    });

  //2

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Online') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu6 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .online').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Offline') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu6 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .offline').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Do not Disturb') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu6 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .do-not-disturb').show();
    });

  $('.dropdown-right > .select-type > .dropdown > .dropdown-menu > li > a').filter(function() {
      var aVal = this.text;
      if (aVal == 'Away') {
        return true;
      }
    })
    .click(function() {
      var aVal = this.text;
      $('.dropdown-right > .select-type > .dropdown > #dropdownMenu6 > .drop-btn-block').text(aVal);
      $('.messages-right > .central-message').hide();
      $('.messages-right > .away').show();
    });

  //messages search

  $('.live-search-list-messages > .search-message').each(function() {
    $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  $('.live-search-box-messages').on('keyup', function() {
    var searchTerm = $(this).val().toLowerCase();
    $('.live-search-list-messages > .search-message').each(function() {
      if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  //close-message

  $('.central-message-right > .close-mes').click(function() {
    if (confirm('Dude, do not hurry! R u serious?')) {
      $(this).closest('.central-message').remove();
    } else {
      return false;
    }
  });

  //read message

  $('.not-open').click(function() {
    $('.not-open > .central-message-right > .fa').removeClass('fa-envelope');
    $('.not-open > .central-message-right > .fa').addClass('fa-envelope-open');
    $(this).removeClass('not-open');
  });

});
