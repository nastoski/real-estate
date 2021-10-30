const footerContent = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
      <div class="footer-content">
      <img src="images/footer-logo.png" class="logo" alt="" />
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">Houses</li>
          <li><a href="#" class="footer-link">Single Family</a></li>
          <li><a href="#" class="footer-link">Apartment</a></li>
          <li><a href="#" class="footer-link">Bungalow</a></li>
          <li><a href="#" class="footer-link">Cabin</a></li>
          <li><a href="#" class="footer-link">Carriage</a></li>
        </ul>
        <ul class="category">
          <li class="category-title">Buildings</li>
          <li><a href="#" class="footer-link">Residential</a></li>
          <li><a href="#" class="footer-link">Educational</a></li>
          <li><a href="#" class="footer-link">Institutional </a></li>
          <li><a href="#" class="footer-link">Assembly</a></li>
          <li><a href="#" class="footer-link">Business</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-title">About Us</p>
    <p class="info">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ad
      commodi tempora deserunt! Dicta magnam in totam! Doloremque eveniet,
      facere repellendus necessitatibus deleniti dolore quos omnis aut illum,
      suscipit iure.
    </p>
    <p class="info">
      Support - help@nastoski.com, Customer Support - support@nastoski.com
    </p>
    <p class="info">Contact Phone +38970000000</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">Terms & Services</a>
        <a href="#" class="social-link">Privacy Page</a>
      </div>
      <div>
        <a href="#" class="social-link"
          ><i class="fab fa-instagram fa-2x"></i
        ></a>
        <a href="#" class="social-link"
          ><i class="fab fa-facebook fa-2x"></i
        ></a>
        <a href="#" class="social-link"
          ><i class="fab fa-twitter fa-2x"></i
        ></a>
      </div>
    </div>
    <p class="footer-credit">
      Copyright © 2021 HN. All Rights Reserved.
    </p>
      `;
};
footerContent();
