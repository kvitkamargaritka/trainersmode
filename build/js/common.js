$(document).ready(function() {

  (function RomsMania() {

    (function menuToggling() {
      $('.js-menu-toggle').click(function(){
        $('.mobile-menu').toggleClass('is-open');
        $('.header__left').toggleClass('is-menu-open');
      });
    }());


    (function dropDowns() {
      $('.js-dropdown-more').click(function(){
        $(this).parent().find('.dropdown ').toggleClass('is-visible');
      });
    }());


    $('table.table').DataTable({
      paging: false,
      searching: false,
      info: false,
      autoWidth: false
    });

  }());
});