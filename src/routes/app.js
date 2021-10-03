import { lazily } from 'react-lazily';

const { Home } = lazily(() => import('../pages'));

const routes = [{ path: '/', name: 'Home', component: Home }];

export default routes;
