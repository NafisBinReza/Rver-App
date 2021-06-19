export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      vehicleId
      status
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      fare {
        id
        f_d
        m_s
        f_t
        base
        m_w
      }
    }
  }
`;

export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      type
      latitude
      longitude
      heading
      userId
      user {
        id
        firstName
        lastName
        username
        email
        telephone
      }
      isActive
      licensePlate
    }
  }
`;

export const getFare = /* GraphQL */ `
  query GetFare($id: ID!) {
    getFare(id: $id) {
      id
      f_d
      m_s
      f_t
      base
      m_w
    }
  }
`;
