/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 22.150196, lng: -100.978548},
      zoom: 17
    });

    var marker1 = {lat: 22.150447, lng: -100.981088};
    var marker2 = {lat: 22.150096, lng: -100.975715};

    var marker = new google.maps.Marker({
      position: marker1,
      map: map,
      title: 'Óptica Sarai'
    });

    var markerB = new google.maps.Marker({
      position: marker2,
      map: map,
      title: 'Óptica Liz'
    });
  }

$( document ).ready(function() {
    $('.blur-cont').center({ against: 'parent' });
    initMap();
});

