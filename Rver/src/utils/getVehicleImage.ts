export const getVehicleImage = (type: string, top: boolean) => {
	if (top) {
		if (type === 'Rickshaw') return require(`../assets/images/Rver.png`);
	} else {
		if (type === 'Rickshaw') return require(`../assets/images/Rver.png`);
	}
};
