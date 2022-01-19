import RestoSource from '../../data/resto-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content" id="content">
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#content');
    restoContainer.innerHTML = createRestaurantDetailTemplate(restos);
    console.log(restos);
  },
};

export default Detail;
