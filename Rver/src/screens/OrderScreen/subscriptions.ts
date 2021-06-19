export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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

export const onVehicleUpdated = /* GraphQL */ `
  subscription OnVehicleUpdated($id: ID!) {
    onVehicleUpdated(id: $id) {
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
