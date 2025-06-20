import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './common/styles/base.css';
import App from './App';

// biome-ignore lint: lint/style/noNonNullAssertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
