document.getElementById("video1").addEventListener("click", function() {
  var video = new bootstrap.Modal(document.getElementById("video"));
  video.show();
});
document.getElementById("animasyon1").addEventListener("click", function() {
  var animasyon = new bootstrap.Modal(document.getElementById("animasyon"));
  animasyon.show();
});
document.getElementById("poster1").addEventListener("click", function() {
  var poster = new bootstrap.Modal(document.getElementById("poster"));
  poster.show();
});
var anasayfaLink = document.querySelector('.navbaranasayfa .nav-link');
    var hakkimdaLink = document.querySelector('a[href="#hakkimda"]');
    var becerilerLink = document.querySelector('a[href="#beceriler"]');
    var portfolyoLink = document.querySelector('a[href="#portfolyo"]');
    var emreAkayLink = document.querySelector('.navbar-brand');

    emreAkayLink.addEventListener('click', function() {
        removeActiveClass();
        anasayfaLink.classList.add('active');
    });

    anasayfaLink.addEventListener('click', function() {
        removeActiveClass();
        anasayfaLink.classList.add('active');
    });

    hakkimdaLink.addEventListener('click', function() {
        removeActiveClass();
        hakkimdaLink.classList.add('active');
    });

    becerilerLink.addEventListener('click', function() {
        removeActiveClass();
        becerilerLink.classList.add('active');
    });

    portfolyoLink.addEventListener('click', function() {
        removeActiveClass();
        portfolyoLink.classList.add('active');
    });

    function removeActiveClass() {
        var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navbarLinks.forEach(function(link) {
            link.classList.remove('active');
        });
    }