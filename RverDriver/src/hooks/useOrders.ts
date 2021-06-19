import { API, graphqlOperation } from 'aws-amplify';
import { useContext, useState } from 'react';
import { updateOrder } from '../graphql/mutations';
import { listOrders } from '../graphql/queries';
import { RootContext } from '../navigations/Root';
import { IOrder } from '../types';
import { isWithinRadius } from '../utils';

export const useOrders = () => {
  const { currentLocation } = useContext(RootContext);
	const [ order, setOrder ] = useState<{
		current: IOrder[];
		accepted: IOrder | null;
	}>({
		current: [],
		accepted: null
	});

  // Reset the local state

  function resetState(){
    setOrder({
      current: [],
      accepted: null
    })
  }

  // Fetch idle orders from the db and store them in the local state by filtering those within 500m radius
	async function fetchOrders () {
		try {
			const response = (await API.graphql(
				graphqlOperation(listOrders, {
					filter: {
						status: {
							eq: 'idle'
						}
					}
				})
			)) as any;
			const data = response.data.listOrders.items;
      setOrder({
        current: data.filter((currentOrder: any) => isWithinRadius({ latitude: currentOrder.originLatitude, longitude: currentOrder.originLongitude }, {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        }, 0.5)),
        accepted: null 
      });
		} catch (err) {
			console.warn(err);
		}
	}

  // Set the current accepted order to a specific status
	async function setAcceptedOrderToStatus (status: IOrder['status'], update_db?: boolean) {
    update_db = update_db ?? true;
		if (order.accepted) {
      try{
        if(update_db){
          // Update the information in the database
          await API.graphql(
            graphqlOperation(updateOrder, {
              input: {
                id: order.accepted.id,
                status
              }
            })
          );
        }
        // Set the local state after the update
        setOrder({
          current: [],
          accepted: {
            ...order.accepted,
            status
          }
        });
      }catch(err){
        console.log(err)
      }
		}
	}

  // Set an order as accepted both in local state and in db
	async function setAcceptedOrder (vehicleId: string) {
		const current_order = order.current[0];
		try{
      // To set an order as accepted, set its status to picking_up and vehicleId with the driver's vehicle id
      await API.graphql(
        graphqlOperation(updateOrder, {
          input: {
            id: current_order.id,
            status: 'picking_up',
            vehicleId
          }
        })
      );

      // Update the local state of the accepted order
  
      setOrder(({ current }) => ({
        accepted: {
          ...current[0],
          status: 'picking_up',
          vehicleId,
          fare: {
            ...current[0].fare,
            f_t: 0
          }
        },
        current: []
      }));
    }catch(err){
      console.log(err);
    }
	}

  // Decline the first of the current orders
	function declineCurrentOrder () {
		setOrder(({ current }) => {
			current.shift();
			return {
				accepted: null,
				current
			};
		});
	};

  // Set the order that has been accepted to completed state
  async function setAcceptedOrderToCompleted(){
    await setAcceptedOrderToStatus('completed', true);
    setOrder({
      accepted: null,
      current: []
    })
  }

	return { resetState, order, fetchOrders, setOrder, setAcceptedOrderToCompleted, declineCurrentOrder, setAcceptedOrder, setAcceptedOrderToStatus };
};
