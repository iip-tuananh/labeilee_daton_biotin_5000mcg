$(document).ready(function () {
	$('.countdown-content').each(function () {
		const $container = $(this);
		const key = 'countdown_end_time'; // localStorage key
		const timeStr = $container.data('time'); // "HH:MM:SS"
		const timeParts = timeStr.split(':').map(Number);
		const cycleSeconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];

		function setNewEndTime() {
			const newEnd = Date.now() + cycleSeconds * 1000;
			localStorage.setItem(key, newEnd);
			return newEnd;
		}

		// Lấy endTime từ localStorage hoặc khởi tạo mới
		// localStorage.removeItem(key); // remove localStorage
		let endTime = parseInt(localStorage.getItem(key), 10);
		if (!endTime || isNaN(endTime) || endTime <= Date.now()) {
			endTime = setNewEndTime();
		}

		function updateDisplay(secondsLeft) {
			const hrs = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
			const mins = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
			const secs = String(secondsLeft % 60).padStart(2, '0');

			const $numbers = $container.find('.countdown-item-number');
			$numbers.eq(0).text(hrs);
			$numbers.eq(1).text(mins);
			$numbers.eq(2).text(secs);
		}

		updateDisplay(Math.floor((endTime - Date.now()) / 1000)); // Hiển thị ban đầu

		setInterval(function () {
			const now = Date.now();
			let remainingSeconds = Math.floor((endTime - now) / 1000);

			if (remainingSeconds <= 0) {
				endTime = setNewEndTime(); // Reset lại thời gian mới
				remainingSeconds = cycleSeconds;
			}

			updateDisplay(remainingSeconds);
		}, 1000);
	});
});
