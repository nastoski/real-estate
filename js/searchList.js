import getData from "./fetchData.js";
const cardsList = document.querySelector("#props-list");
// const search = document.querySelector("#search-bar");

let url = "http://127.0.0.1:5500/list.html" + window.location.search;

let params = new URL(url).searchParams;

let searchData = params.get("address");

getData.then((data) => {
  let matches = data.filter((addr) => {
    const regex = new RegExp(`^${searchData}`, "gi");
    return addr.address.match(regex);
  });

  if (searchData.value === "") {
    matches = [];
    cardsList.innerHTML = "";
  } else {
    const displayCards = (matches) => {
      const content = matches
        .map(
          (match) =>
            `
                <div class="col-lg-6 col-md-4 col-sm-6">
                    <div class="properties-thumb properties-thumb-secondary">
                      <div class="properties-top">
                        <div class="properties-image">
                          <img src=${match.images[0]} class="img-responsive" />
                        </div>
                        <div class="properties-date">
                          <span><i class="fas fa-bed"></i> ${match.bedrooms}</span>
                          <span><i class="fas fa-bath"></i> ${match.bathrooms}</span>
                          <span
                            ><i class="far fa-square"></i> ${match.size}m<sup>2</sup></span
                          >
                        </div>
                      </div>
                      <div class="properties-detail">
                        <h3>
                          <a href="#">${match.name}</a>
                        </h3>
                        <p class="lead">
                          <strong>$${match.price}</strong>
                        </p>
                        <p>
                          ${match.description}
                        </p>
                      </div>
                    </div>
                  </div>
                `
        )
        .join("");
      cardsList.innerHTML = content;
    };
    displayCards(matches);
  }
});
