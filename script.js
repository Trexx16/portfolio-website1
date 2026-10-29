/*
  script.js — Mcdaniel Ologun portfolio
  Small helpers: mobile menu toggle, form feedback, auto-updating year.
*/
(function () {
  "use strict";

  // Auto-updating copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    // Close menu after a link is clicked
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form feedback
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = "Thanks! Your message has been sent. I'll get back to you soon.";
      form.reset();
    });
    form.addEventListener("reset", function () {
      status.textContent = "";
    });
  }
})();
