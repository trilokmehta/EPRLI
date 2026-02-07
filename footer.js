class AppFooter extends HTMLElement {
  connectedCallback() {
    // Get the current year automatically (e.g., 2026, 2027...)
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer id="contact">
        <div class="footer-content">
          <div class="footer-col">
            <h4>House of Charming</h4>
            <p style="margin-bottom: 16px">Premium Product Catalog</p>
            <ul class="footer-links">
              <li>GST: 27AAAAA0000A1Z5</li>
              <li>CIN: U74999MH2010PTC000000</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="main.html">Home</a></li>
              <li><a href="#products">Collection</a></li>
              <li><a href="#brands">Partner Brands</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul class="footer-links">
              <li>
                <a href="mailto:info@houseofcharming.com">info@houseofcharming.com</a>
              </li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>123 Business Street, Premium City</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${currentYear} House of Charming. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}

// Define the custom tag <app-footer>
customElements.define("app-footer", AppFooter);