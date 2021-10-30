import getData from "./fetchData.js";

const images = document.querySelector("#images-section");
getData.then((data) => {
  const imagesContent = `
    <div class="row">
    <div class="col-md-6 col-xs-12">
    <div class="image-slider" style="background-image: url(${data[2].images[0]});" >
    <div class="prop-images" >
      <img

        class="active"
        src=${data[2].images[0]}
        alt=""
      />
      <img src=${data[2].images[1]} alt="" />
      <img src=${data[2].images[2]} alt="" />
      <img src=${data[2].images[3]} alt="" />
    </div>
    </div>
      </div>
      </div>
    
      <div class="col-md-6 col-xs-12 short-des-container">
        <h2>${data[2].name}</h2>
        <p class="lead">
        <i class="fas fa-map-marker-alt"></i> ${data[2].address}
        </p>
        <p class="lead">
          <strong class="text-primary">$${data[2].price}</strong>
        </p>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Type</span>
              <br />
              <strong>House</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Property Size</span>
              <br />
              <strong>${data[2].size}m<sup>2</sup></strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Property Id</span>
              <br />
              <strong>${data[2].id}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Year Built: </span>
              <br />
              <strong>${data[2].yearbuilt}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Rooms: </span>
              <br />
              <strong>${data[2].rooms}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Bedrooms: </span>
              <br />
              <strong>${data[2].bedrooms}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Bathrooms: </span>
              <br />
              <strong>${data[2].bathrooms}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Garages: </span>
              <br />
              <strong>${data[2].garage}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Basement: </span>
              <br />
              <strong>${data[2].basement}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>City: </span>
              <br />
              <strong>${data[2].city}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Area: </span>
              <br />
              <strong>${data[2].area}</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-6">
            <p>
              <span>Country: </span>
              <br />
              <strong>${data[2].country}</strong>
            </p>
          </div>
        </div>
      </div>
      </div>
    `;
  images.innerHTML = imagesContent;

  const propImages = document.querySelectorAll(".prop-images img");
  const propImageSlider = document.querySelector(".image-slider");

  let activeImageSlider = 0;

  propImages.forEach((item, i) => {
    item.addEventListener("click", () => {
      propImages[activeImageSlider].classList.remove("active");
      item.classList.add("active");
      propImageSlider.style.backgroundImage = `url('${item.src}')`;
      activeImageSlider = i;
    });
  });
});
