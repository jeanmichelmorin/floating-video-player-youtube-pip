if (window.location.href.indexOf("youtube") > -1) {

	setTimeout( () => {

			let button = document.getElementsByClassName("ytp-pip-button")[0];

			button.style.display = "inline-block";

			button.innerHTML = '<svg fill="white" stroke="white" stroke-width="3%" height="100%" version="1.1" viewBox="0 -13 16 36" width="100%"><path d="M 0 10.62 L 0 0.15 Q 0.63 0.075 1.358 0.038 A 28.472 28.472 0 0 1 2.397 0.004 A 33.35 33.35 0 0 1 2.895 0 Q 3.87 0 4.635 0.24 Q 5.4 0.48 5.925 0.9 Q 6.45 1.32 6.72 1.913 A 3.044 3.044 0 0 1 6.99 3.147 A 3.502 3.502 0 0 1 6.99 3.195 A 3.733 3.733 0 0 1 6.904 4.011 A 2.996 2.996 0 0 1 6.668 4.688 Q 6.345 5.34 5.768 5.79 Q 5.19 6.24 4.38 6.473 A 5.946 5.946 0 0 1 3.303 6.672 A 7.45 7.45 0 0 1 2.595 6.705 A 15.603 15.603 0 0 1 1.915 6.691 A 12.439 12.439 0 0 1 1.425 6.66 L 1.425 10.62 L 0 10.62 Z M 12.84 10.62 L 12.84 0.15 Q 13.47 0.075 14.198 0.038 A 28.472 28.472 0 0 1 15.237 0.004 A 33.35 33.35 0 0 1 15.735 0 Q 16.71 0 17.475 0.24 Q 18.24 0.48 18.765 0.9 Q 19.29 1.32 19.56 1.913 A 3.044 3.044 0 0 1 19.83 3.147 A 3.502 3.502 0 0 1 19.83 3.195 A 3.733 3.733 0 0 1 19.744 4.011 A 2.996 2.996 0 0 1 19.508 4.688 Q 19.185 5.34 18.607 5.79 Q 18.03 6.24 17.22 6.473 A 5.946 5.946 0 0 1 16.143 6.672 A 7.45 7.45 0 0 1 15.435 6.705 A 15.603 15.603 0 0 1 14.755 6.691 A 12.439 12.439 0 0 1 14.265 6.66 L 14.265 10.62 L 12.84 10.62 Z M 10.14 10.62 L 8.715 10.62 L 8.715 0.12 L 10.14 0.12 L 10.14 10.62 Z M 1.425 1.26 L 1.425 5.445 Q 1.59 5.466 1.801 5.483 A 14.274 14.274 0 0 0 2.003 5.498 Q 2.34 5.52 2.775 5.52 A 4.957 4.957 0 0 0 3.558 5.462 Q 3.98 5.395 4.319 5.248 A 2.261 2.261 0 0 0 4.852 4.928 A 1.927 1.927 0 0 0 5.572 3.518 A 2.688 2.688 0 0 0 5.58 3.315 A 2.193 2.193 0 0 0 5.469 2.602 A 1.82 1.82 0 0 0 4.882 1.77 Q 4.336 1.324 3.408 1.227 A 5.243 5.243 0 0 0 2.865 1.2 Q 2.46 1.2 2.1 1.215 Q 1.74 1.23 1.425 1.26 Z M 14.265 1.26 L 14.265 5.445 Q 14.43 5.466 14.641 5.483 A 14.274 14.274 0 0 0 14.843 5.498 Q 15.18 5.52 15.615 5.52 A 4.957 4.957 0 0 0 16.398 5.462 Q 16.82 5.395 17.159 5.248 A 2.261 2.261 0 0 0 17.692 4.928 A 1.927 1.927 0 0 0 18.412 3.518 A 2.688 2.688 0 0 0 18.42 3.315 A 2.193 2.193 0 0 0 18.309 2.602 A 1.82 1.82 0 0 0 17.722 1.77 Q 17.176 1.324 16.248 1.227 A 5.243 5.243 0 0 0 15.705 1.2 Q 15.3 1.2 14.94 1.215 Q 14.58 1.23 14.265 1.26 Z" vector-effect="non-scaling-stroke"/></svg>';
		
	}, 3000);

}