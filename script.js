(() => {
  "use strict";


  /* =========================================================
     CORE AI
     Website v0.01
     ========================================================= */


  /* =========================
     ACTIVE NAVIGATION
     ========================= */

  const currentPage = document.body.dataset.page;

  const activeNavLink = document.querySelector(
    `[data-nav="${currentPage}"]`
  );

  if (activeNavLink) {
    activeNavLink.classList.add("active");
  }


  /* =========================
     MOBILE SIDEBAR
     ========================= */

  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  const sidebarBackdrop =
    document.getElementById("sidebarBackdrop");


  function setMenu(open) {

    if (
      !sidebar ||
      !menuButton ||
      !sidebarBackdrop
    ) {
      return;
    }


    sidebar.classList.toggle("open", open);

    sidebarBackdrop.classList.toggle(
      "show",
      open
    );


    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );


    menuButton.setAttribute(
      "aria-label",
      open
        ? "Close navigation"
        : "Open navigation"
    );


    menuButton.textContent =
      open
        ? "×"
        : "☰";


    document.body.classList.toggle(
      "menu-open",
      open
    );

  }


  /* =========================
     MENU BUTTON
     ========================= */

  if (menuButton) {

    menuButton.addEventListener(
      "click",
      () => {

        const isOpen =
          sidebar &&
          sidebar.classList.contains("open");

        setMenu(!isOpen);

      }
    );

  }


  /* =========================
     BACKDROP
     ========================= */

  if (sidebarBackdrop) {

    sidebarBackdrop.addEventListener(
      "click",
      () => {

        setMenu(false);

      }
    );

  }


  /* =========================
     ESCAPE KEY
     ========================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        setMenu(false);
      }

    }
  );


  /* =========================
     CLOSE AFTER MOBILE NAV
     ========================= */

  const navigationLinks =
    document.querySelectorAll(".nav a");


  navigationLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        if (window.innerWidth <= 900) {
          setMenu(false);
        }

      }
    );

  });


  /* =========================
     WINDOW RESIZE
     ========================= */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 900) {
        setMenu(false);
      }

    }
  );


})();
