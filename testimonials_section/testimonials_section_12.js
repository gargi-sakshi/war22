// Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel2").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 3
      },
      1100: {
        items: 1
      }
    }
  });
