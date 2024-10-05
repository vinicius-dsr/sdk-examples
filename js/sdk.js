const BrowserSDK = {
	// Audio SDK
	AudioSDK: {
		startRecording: () =>
			new Promise((resolve, reject) => {
				// biome-ignore lint/complexity/useOptionalChain: <explanation>
				if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
					navigator.mediaDevices
						.getUserMedia({ audio: true })
						.then((stream) => {
							const mediaRecorder = new MediaRecorder(stream);
							resolve(mediaRecorder);
						})
						.catch((err) => reject(`Erro ao acessar o microfone: ${err}`));
				} else {
					reject("API de áudio não suportada neste navegador");
				}
			}),
	},

	// Video SDK
	VideoSDK: {
		startVideo: () =>
			new Promise((resolve, reject) => {
				// biome-ignore lint/complexity/useOptionalChain: <explanation>
				if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
					navigator.mediaDevices
						.getUserMedia({ video: true })
						.then((stream) => resolve(stream))
						.catch((err) => reject(`Erro ao acessar a câmera: ${err}`));
				} else {
					reject("API de vídeo não suportada neste navegador");
				}
			}),
	},

	// GPS SDK
	GpsSDK: {
		getCurrentPosition: (successCallback, errorCallback) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					successCallback,
					errorCallback,
				);
			} else {
				errorCallback("Geolocalização não suportada neste navegador");
			}
		},
	},

	// Notification SDK
	NotificationSDK: {
		requestPermission: () =>
			new Promise((resolve) => {
				if ("Notification" in window) {
					Notification.requestPermission().then((permission) =>
						resolve(permission),
					);
				} else {
					resolve("Notificações não suportadas");
				}
			}),

		showNotification: (title, options) => {
			if ("Notification" in window && Notification.permission === "granted") {
				new Notification(title, options);
			}
		},
	},

	// Storage SDK
	StorageSDK: {
		local: {
			setItem: (key, value) => {
				localStorage.setItem(key, value);
			},
			getItem: (key) => localStorage.getItem(key),
		},
		session: {
			setItem: (key, value) => {
				sessionStorage.setItem(key, value);
			},
			getItem: (key) => sessionStorage.getItem(key),
		},
	},

	// Clipboard SDK
	ClipboardSDK: {
		copyToClipboard: (text) =>
			new Promise((resolve, reject) => {
				if (navigator.clipboard) {
					navigator.clipboard.writeText(text).then(resolve, reject);
				} else {
					reject("API de Clipboard não suportada neste navegador");
				}
			}),
	},

	// Vibration SDK
	VibrationSDK: {
		vibrate: (pattern) => {
			if (navigator.vibrate) {
				navigator.vibrate(pattern);
			} else {
				console.error("API de vibração não suportada neste navegador");
			}
		},
	},
};
