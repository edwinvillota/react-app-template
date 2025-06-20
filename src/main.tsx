import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './common/styles/base.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
