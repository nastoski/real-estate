import getData from "./fetchData.js";
const cardsList = document.querySelector("#props-list");

getData.then((data) => {
  data.map((item) => {
    const content = `
                      <div class="col-lg-6 col-md-4 col-sm-6">
                      <div class="properties-thumb properties-thumb-secondary">
                        <div class="properties-top">
                          <div class="properties-image">
                            <img src=${item.images[0]} class="img-responsive" />
                          </div>
                          <div class="properties-date">
                            <span><i class="fas fa-bed"></i> ${item.bedrooms}</span>
                            <span><i class="fas fa-bath"></i> ${item.bathrooms}</span>
                            <span
                              ><i class="far fa-square"></i> ${item.size}m<sup>2</sup></span
                            >
                          </div>
                        </div>
                        <div class="properties-detail">
                          <h3>
                            <a href="#">${item.name}</a>
                          </h3>
                          <p class="lead">
                            <strong>$${item.price}</strong>
                          </p>
                          <p>
                            ${item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                      `;
    cardsList.insertAdjacentHTML("beforeend", content);
  });
});
