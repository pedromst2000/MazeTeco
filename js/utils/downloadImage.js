/**
 * @function downloadImage - This function downloads the image from the URL.
 * @description This function downloads the image from the URL.
 * @param {string} imageUrl - The URL of the image to download.
 * @param {string} imageName - The name of the image to download.
 * @returns {void}
 */

export function downloadImage(imageUrl, imageName) {
	let base64String = "";

	fetch(imageUrl)
		.then((res) => res.blob())
		.then((blob) => {
			const fileReader = new FileReader();

			fileReader.onloadend = () => {
				base64String = fileReader.result;

				const imgElement = document.getElementById("image-to-download");

				// Settting the image src to the base64 string
				imgElement.src = base64String;
			};

			// Converting the blob to a base64 string
			fileReader.readAsDataURL(blob);
		});

	document.getElementById("download-button").addEventListener("click", () => {
		const link = document.createElement("a");
		link.href = base64String;
		link.download = `${imageName}`;
		link.click();
	});
}
