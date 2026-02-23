class AppHeader extends HTMLElement {
  connectedCallback() {
    /* Inside header.js */
    this.innerHTML = `
  <header>
    <div class="header-content">
      <a href="index.html" class="logo-section">
        <div class="logo-circle"><span class="logo-icon">HOC</span></div>
      </a>

      <nav class="header-center">
        <a href="index.html" class="nav-link">Home</a>
        <a href="index.html#products" class="nav-link">Collection</a>
        <a href="index.html#brands" class="nav-link">Brands</a> 
        <a href="index.html#features" class="nav-link">Why Us</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+1234567890" class="btn">Call Now</a>
        <a href="Catalogue.html" class="btn btn-primary">Catalogue</a>
      </div>
      
      <a href="Catalogue.html" class="mobile-catalog-btn">Catalogue</a>
      <button class="mobile-menu-btn" id="menuBtn">☰</button>
    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    <button class="close-menu" id="closeBtn">×</button>
    <a href="index.html">Home</a>
    <a href="main.html#products">Collection</a>
    <a href="brand.html">Brands</a>
    <a href="main.html#features">Why Us</a>
    <a href="#contact">Contact</a>
    <a href="tel:+1234567890" style="color: var(--gold); margin-top: 20px">Call Now</a>
  </div>

  <div class="overlay" id="navOverlay"></div>
`;

    // --- LOGIC FOR MENU TOGGLE ---
    const menuBtn = this.querySelector("#menuBtn");
    const closeBtn = this.querySelector("#closeBtn");
    const overlay = this.querySelector("#navOverlay");
    const mobileNav = this.querySelector("#mobileNav");
    const links = this.querySelectorAll(".mobile-nav a");

    function toggleMenu() {
      mobileNav.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    menuBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Close menu when a link is clicked
    links.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
  }
}

// Define the custom tag <app-header>
customElements.define("app-header", AppHeader);
