function changeColor(event) {
  event.target.style.color="#a93d3d";
};

var logo = document.getElementById("logo");
logo.addEventListener("click", changeColor);

$(document).ready(function() {
  $('#bookFilters').on('click', '#publishedFilter', function() {
    $('.inactive').removeClass('inactive');
    $('.book').filter('.unpublished').addClass('inactive');
  });

  $('#bookFilters').on('click', '#EuropeFilter', function() {
    $('.inactive').removeClass('inactive');
    $('.book').filter('.Africa').addClass('inactive');
  });

  $('#bookFilters').on('click', '#AfricaFilter', function() {
    $('.inactive').removeClass('inactive');
    $('.book').filter('.Europe').addClass('inactive');
  });

  $('#bookFilters').on('click', '#removeFilters', function() {
    $('.inactive').removeClass('inactive');
  });

});
