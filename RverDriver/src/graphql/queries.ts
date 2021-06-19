export const getVehicleId = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
    }
  }
`;

export const getVehicleDetails = /* GraphQL */ `
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
        username
        email
        orders {
          nextToken
        }
        vehicle {
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
        createdAt
        updatedAt
      }
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        vehicleType
        originLatitude
        originLongitude
        destinationLatitude
        destinationLongitude
        destinationAddress
        originAddress
        userId
        completedAt
        user {
          id
          username
          email
          telephone
          firstName
          lastName
        }
        status
        updatedAt
        fare{
          id
          f_t
          base
          f_d
          m_s
          m_w
        }
      }
    }
  }
`;

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      email
      vehicle {
        id
        type
        latitude
        longitude
        heading
        userId
        isActive
        licensePlate
        createdAt
        updatedAt
      }
      telephone
      createdAt
      updatedAt
    }
  }
`;
