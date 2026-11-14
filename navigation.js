document.querySelectorAll(".navbar").forEach((navbar) => {
  const toggle = navbar.querySelector(".nav-toggle");
  const links = navbar.querySelector(".nav-links");
  const label = toggle.querySelector(".visually-hidden");
  const mobileViewport = window.matchMedia("(max-width: 48rem)");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close navigation" : "Open navigation";
    links.classList.toggle("is-open", open);
  };

  navbar.classList.add("nav-ready");
  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) setOpen(false);
  });

  mobileViewport.addEventListener("change", () => {
    const focused = document.activeElement;
    const wasOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(false);
    if (mobileViewport.matches && links.contains(focused)) toggle.focus();
    if (!mobileViewport.matches && (focused === toggle || wasOpen)) {
      links.querySelector("a[aria-current='page']").focus();
    }
  });
});
