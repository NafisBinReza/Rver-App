export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      email
      orders {
        items {
          id
          createdAt
          completedAt
          vehicleType
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          originAddress
          destinationAddress
          userId
          vehicleId
          vehicle {
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
              createdAt
              updatedAt
            }
            isActive
            licensePlate
            createdAt
            updatedAt
          }
          status
          fareId
          updatedAt
          fare {
            id
            f_d
            m_s
            f_t
            base
            m_w
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      bookmarks {
        items {
          id
          userId
          name
          latitude
          longitude
          address
          createdAt
          updatedAt
        }
        nextToken
      }
      telephone
      createdAt
      updatedAt
    }
  }
`;
