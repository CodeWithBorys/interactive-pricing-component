const price = document.querySelector('#price');
const pageviews = document.querySelector('#pageviews');
const priceSlider = document.querySelector('#price__range');
const yearBilling = document.querySelector('#toggle');

priceSlider.addEventListener('input', handleSlider);
yearBilling.addEventListener('change', setPrice);

handleSlider();

function setPrice() {
  price.innerHTML =
    priceSlider.value == 0
      ? `<span>Free</span>`
      : `<span>$${
          yearBilling.checked
            ? (priceSlider.value * 0.75).toFixed(2)
            : Number(priceSlider.value).toFixed(2)
        }</span> / month`;

  pageviews.textContent =
    priceSlider.value == 0
      ? `1K Pageviews`
      : `${priceSlider.value * 5}K Pageviews`;
  if (priceSlider.value == 75) pageviews.textContent = `Unlimited Pageviews`;
}

function handleSlider() {
  setPrice();
  let thumbPosition = Math.trunc((priceSlider.value * 100) / 75);
  priceSlider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}%, hsl(224, 65%, 95%) ${thumbPosition}%)`;
}
