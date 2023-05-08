import { useState, useEffect } from 'react';

export default function useLogos() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < 1390);
		}

		handleResize();

		window.addEventListener('resize', handleResize); // update value on resize

		return () => window.removeEventListener('resize', handleResize); // cleanup listener on unmount
	}, []);

	return isMobile;
}
