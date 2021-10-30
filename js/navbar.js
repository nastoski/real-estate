const navBar = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
    <div class="nav">
    <div class="nav-items">
    <img src="images/img-logo.png" class="brand-logo" alt="" />
    <ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">Home</a></li>
    <li class="link-item"><a href="list.html" class="link">List</a></li>
  </ul>
      <form action="list.html" method="GET" class="search">
        <input
          type="text"
          class="search-box"
          name="address"
          id="search-bar"
          placeholder="Type keyword"
        />
      <button type="submit" class="search-btn">Search</button>
      </form>
    </div>
  </div>
`;
};
navBar();
