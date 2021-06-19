export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      userId
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      userId
      isActive
      createdAt
      updatedAt
      licensePlate
      user{
        lastName
        firstName
        telephone
      }
    }
  }
`;

export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      vehicleId
      createdAt
      completedAt
      status
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      fare{
        id
        f_d
        m_s
        f_t
        base
        m_w
      }
      vehicle{
        licensePlate
        user{
          lastName
          firstName
          telephone
        }
      }
    }
  }
`;

export const updateFare = /* GraphQL */ `
  mutation UpdateFare(
    $input: UpdateFareInput!
    $condition: ModelFareConditionInput
  ) {
    updateFare(input: $input, condition: $condition) {
      id
      f_d
      m_s
      f_t
      base
      m_w
      orderId
      createdAt
      updatedAt
    }
  }
`;
