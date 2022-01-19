import RestoList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestoList,
  '/list': RestoList,
  '/detail/:id': Detail,
};

export default routes;
