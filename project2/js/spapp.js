$(document).ready(function () {
  var app = $.spapp({ pageNotFound: "error_404" });
  app.route({
    view: "home",
    load: "home.html",
  });

  app.route({
    view: "about",
    load: "about.html",
  });

  app.route({
    view: "projects",
    load: "projects.html",
  });

  app.route({
    view: "gallery",
    load: "gallery.html",
  });

  app.route({
    view: "contact",
    load: "contact.html",
  });

  app.run();
});
