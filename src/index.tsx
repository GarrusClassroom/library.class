import ReactDOM from 'react-dom/client';

import { reportWebVitals } from './report-web-vitals';

import './index.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <div>
        <div>Hello world!!!</div>
        <div>sprint 2</div>
    </div>,
);
reportWebVitals();
