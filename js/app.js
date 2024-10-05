document.addEventListener("DOMContentLoaded", () => {
	// Áudio
	const startAudioBtn = document.getElementById("start-audio");
	const audioStatus = document.getElementById("audio-status");

	startAudioBtn.addEventListener("click", () => {
		BrowserSDK.AudioSDK.startRecording()
			.then((recorder) => {
				if (recorder) {
					recorder.start();
					audioStatus.textContent = "Gravando áudio...";
					setTimeout(() => {
						recorder.stop();
						audioStatus.textContent = "Gravação finalizada.";
					}, 3000);
				}
			})
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			.catch((err) => (audioStatus.textContent = err));
	});

	// Vídeo
	const startVideoBtn = document.getElementById("start-video");
	const videoOutput = document.getElementById("video-output");

	startVideoBtn.addEventListener("click", () => {
		BrowserSDK.VideoSDK.startVideo()
			.then((stream) => {
				videoOutput.srcObject = stream;
				videoOutput.style.display = "block";
				videoOutput.play();
			})
			.catch((err) => console.error(err));
	});

	// GPS
	const getLocationBtn = document.getElementById("get-location");
	const gpsStatus = document.getElementById("gps-status");

	getLocationBtn.addEventListener("click", () => {
		BrowserSDK.GpsSDK.getCurrentPosition(
			(pos) =>
				// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				(gpsStatus.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`),
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			(err) => (gpsStatus.textContent = `Erro ao obter localização: ${err}`),
		);
	});

	// Notificações
	const showNotificationBtn = document.getElementById("show-notification");

	showNotificationBtn.addEventListener("click", () => {
		BrowserSDK.NotificationSDK.requestPermission().then((permission) => {
			if (permission === "granted") {
				BrowserSDK.NotificationSDK.showNotification("Olá!", {
					body: "Esta é uma notificação do navegador.",
					icon: "img/notification-icon.png",
				});
			} else {
				console.error("Permissão negada para notificações");
			}
		});
	});

	// Armazenamento
	const setLocalStorageBtn = document.getElementById("set-local-storage");
	const getLocalStorageBtn = document.getElementById("get-local-storage");
	const storageStatus = document.getElementById("storage-status");

	setLocalStorageBtn.addEventListener("click", () => {
		BrowserSDK.StorageSDK.local.setItem("exemplo", "Olá Mundo");
		storageStatus.textContent = "Texto 'Olá Mundo' salvo no LocalStorage!";
	});

	getLocalStorageBtn.addEventListener("click", () => {
		const texto = BrowserSDK.StorageSDK.local.getItem("exemplo");
		storageStatus.textContent = texto
			? `Texto recuperado: ${texto}`
			: "Nenhum texto encontrado no LocalStorage.";
	});

	// Clipboard
	const clipboardText = document.getElementById("clipboard-text");
	const copyClipboardBtn = document.getElementById("copy-clipboard");

	copyClipboardBtn.addEventListener("click", () => {
		const text = clipboardText.value;
		BrowserSDK.ClipboardSDK.copyToClipboard(text)
			.then(() => {
				alert("Texto copiado!");
			})
			.catch((err) => console.error("Erro ao copiar para clipboard:", err));
	});

	// Vibração
	const startVibrationBtn = document.getElementById("start-vibration");

	startVibrationBtn.addEventListener("click", () => {
		BrowserSDK.VibrationSDK.vibrate([200, 100, 200]);
	});
});
