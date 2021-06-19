import { IFareDetails } from '../../types';

// Calculate the final fare after all the fare parts has been obtained
export const calculateFinalFare = (fare: IFareDetails) => {
	return Math.round((fare.base + fare.f_d * fare.m_s + fare.f_t) * fare.m_w);
};
