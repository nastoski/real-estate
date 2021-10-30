import getData from "./fetchData.js";

const sliderFunc = () => {
  getData.then((data) => {
    data.map((item) => {
      const sliderContent = `
        <div class="product-card">
        <div class="product-image">
          <a href="property.html"><img src=${item.images[0]} class="product-thumb" alt="" /><a/>
          <span class="card-span">${item.address}</span>
        </div>
        <div class="product-info">
          <h2 class="product-name">${item.name}</h2>
          <p class="product-country">${item.country}</p>
          <span class="price">$${item.price}</span>
          <i class="fas fa-bed"> ${item.bedrooms}</i>
          <i class="fas fa-bath"> ${item.bathrooms}</i>
          <i class="far fa-square"> ${item.size}</i>
        </div>
      </div> `;
      document
        .querySelector(".product-container")
        .insertAdjacentHTML("beforeend", sliderContent);
    });
  });
};
sliderFunc();

const featuredProps = () => {
  getData.then((data) => {
    function shuffleData(data) {
      for (let i = data.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      return data;
    }
    const dataItem = shuffleData(data);
    dataItem.map((card) => {
      const cardDetail = `
        <div class="col-md-6 pb-3">
        <div class="prop-item">
          <div class="prop-img">
            <a href="property.html"><img src=${card.images[0]} height="370" width="327" /></a>
          </div>
          <div class="prop-info">
            <div class="prop-text">
              <h1>${card.name}</h1>
              <h2>${card.address}</h2>
              <span class="span-price">$${card.price}</span>
              <p>
                ${card.description}
              </p>
              <br />
              <div class="prop-icon-details">
                <i class="fas fa-bed"> ${card.bedrooms}</i>
                <i class="fas fa-bath"> ${card.bathrooms}</i>
                <i class="far fa-square"> ${card.size}m<sup>2</sup></i>
              </div>
            </div>
          </div>
        </div>
      </div>        
        `;
      document
        .getElementById("prop-card")
        .insertAdjacentHTML("beforeend", cardDetail);
    });
  });
};
featuredProps();
