import { API, graphqlOperation } from 'aws-amplify';
import { useContext } from 'react';
import { updateVehicle } from '../graphql/mutations';
import { RootContext } from '../navigations/Root';
import { IVehicle } from '../types';

export const useVehicleDetails = () => {
  const {currentUser, setCurrentUser} = useContext(RootContext);

  const vehicleDetails = currentUser?.vehicle;

  // Update the vehicle associated with the driver
	async function updateVehicleData (input: Partial<IVehicle>) {
		if (vehicleDetails && currentUser) {
			try {
        // 
				(await API.graphql(
					graphqlOperation(updateVehicle, {
						input: {
							id: vehicleDetails.id,
							...input
						}
					})
				)) as any;
        setCurrentUser({
          ...currentUser,
          vehicle: {
            ...vehicleDetails,
            ...input
          }
        })
			} catch (err) {
				console.log(err);
			}
		}
	}

	return { vehicleDetails, updateVehicleData };
};
