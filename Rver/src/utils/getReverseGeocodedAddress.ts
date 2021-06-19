// Get the address of a coordinate using google's maps api
export const getReverseGeocodedAddress = (latitude: number, longitude: number) => {
	return new Promise((resolve) => {
		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=GOOGLE_GEOCODING_API_KEY`
		)
			.then((data) => data.json())
			.then(async (data) => {
				const address = data.results[0].formatted_address;
				resolve(address);
			});
	});
};
