/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
            orderId
            order {
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
              status
              fareId
              updatedAt
            }
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
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
          licensePlate
          createdAt
          updatedAt
        }
        bookmarks {
          nextToken
        }
        telephone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDestination = /* GraphQL */ `
  query GetDestination($id: ID!) {
    getDestination(id: $id) {
      id
      userId
      name
      latitude
      longitude
      address
      createdAt
      updatedAt
    }
  }
`;
export const listDestinations = /* GraphQL */ `
  query ListDestinations(
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          status
          fareId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        firstName
        lastName
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
          licensePlate
          createdAt
          updatedAt
        }
        bookmarks {
          nextToken
        }
        telephone
        createdAt
        updatedAt
      }
      isActive
      licensePlate
      createdAt
      updatedAt
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
      user {
        id
        firstName
        lastName
        username
        email
        orders {
          nextToken
        }
        bookmarks {
          nextToken
        }
        telephone
        createdAt
        updatedAt
      }
      vehicleId
      vehicle {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
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
      fare {
        id
        f_d
        m_s
        f_t
        base
        m_w
        orderId
        order {
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
          status
          fareId
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        completedAt
        vehicleType
        originLatitude
        originLongitude
        destinationLatitude
        destinationLongitude
        originAddress
        destinationAddress
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
        vehicleId
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
        status
        fareId
        fare {
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
        updatedAt
      }
      nextToken
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
      orderId
      order {
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
        vehicleId
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
        status
        fareId
        fare {
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
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFares = /* GraphQL */ `
  query ListFares(
    $filter: ModelFareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        f_d
        m_s
        f_t
        base
        m_w
        orderId
        order {
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
          status
          fareId
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLog = /* GraphQL */ `
  query GetLog($id: ID!) {
    getLog(id: $id) {
      id
      createdAt
      userId
      user {
        id
        firstName
        lastName
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
          licensePlate
          createdAt
          updatedAt
        }
        bookmarks {
          nextToken
        }
        telephone
        createdAt
        updatedAt
      }
      vehicle200mIds
      vehicle500mIds
      orderId
      order {
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
        vehicleId
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
        status
        fareId
        fare {
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
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
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
        vehicle200mIds
        vehicle500mIds
        orderId
        order {
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
          status
          fareId
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
