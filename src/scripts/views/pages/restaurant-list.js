import RestoSource from '../../data/resto-source';
import { createRestaurantListTemplate } from '../../templates/template-creator';

const RestoList = {
  async render() {
    return `
    <div class="content">
        <h2>List Of Restaurant</h2>
        <div id="restaurant" class="restaurant">
        </div>
    </div>
      `;
  },

  async afterRender() {
    const restos = await RestoSource.listResto();
    const restoContainer = document.querySelector('#restaurant');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantListTemplate(resto);
    });

    console.log(restos);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default RestoList;
