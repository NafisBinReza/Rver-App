import { LocPoint } from '../types';

// Check to see if the a coordinate is within the radius of another coordinate
export function isWithinRadius (checkPoint: LocPoint, centerPoint: LocPoint, km: number) {
	const ky = 40000 / 360;
	const kx = Math.cos(Math.PI * centerPoint.latitude / 180.0) * ky;
	const dx = Math.abs(centerPoint.longitude - checkPoint.longitude) * kx;
	const dy = Math.abs(centerPoint.latitude - checkPoint.latitude) * ky;
	return Math.sqrt(dx * dx + dy * dy) <= km;
}
