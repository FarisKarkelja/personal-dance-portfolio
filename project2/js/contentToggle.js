$(document).ready(function() {
  $('.faqContentToggle').click(function() {
      $('.accordion').toggle(); // Toggle the visibility of the accordion content
      // Toggle the button text between "Show" and "Hide"
      if ($('.faqContentToggle').text() === 'Show') {
          $('.faqContentToggle').text('Hide');
      } else {
          $('.faqContentToggle').text('Show');
      }
  });
});