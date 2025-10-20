toggleMenuMobile = () => {
	const menuMobile = document.querySelector('.menu-mobile');
	menuMobile.classList.toggle('active');
	const menuMobileOverlay = document.querySelector('.menu-mobile-overlay');
	menuMobileOverlay.classList.toggle('active');
};

// $(document).ready(function() {
//     $('.menu-action-item').on('click', function(e) {
//         e.preventDefault();
//         const target = $(this).attr('href');
//         const headerHeight = $('.header').outerHeight() || 0;

//         $('html, body').animate({
//             scrollTop: $(target).offset().top - headerHeight
//         }, 1800, 'linear'); // 👈 'linear' để di chuyển đều
//         toggleMenuMobile();
//     });
// });

document.querySelectorAll('.menu-action-item').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		const target = document.querySelector(link.getAttribute('href'));
		const headerHeight = document.querySelector('.header')?.offsetHeight || 0;

		const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		const startY = window.pageYOffset;
		const distance = targetY - startY;

		const speed = 1800; // 👈 px mỗi giây — chỉnh để nhanh / chậm
		const duration = (Math.abs(distance) / speed) * 1000; // tính thời gian dựa theo khoảng cách

		const startTime = performance.now();

		function scrollStep(currentTime) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1); // từ 0 → 1 tuyến tính

			const scrollY = startY + distance * progress;
			window.scrollTo(0, scrollY);

			if (progress < 1) {
				requestAnimationFrame(scrollStep);
			}
		}

		requestAnimationFrame(scrollStep);
		toggleMenuMobile();
	});
});
