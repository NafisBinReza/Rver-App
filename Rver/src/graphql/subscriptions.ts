/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onOrderCreated = /* GraphQL */ `
  subscription OnOrderCreated {
    onOrderCreated {
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
export const onVehicleUpdated = /* GraphQL */ `
  subscription OnVehicleUpdated($id: ID!) {
    onVehicleUpdated(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          status
          fareId
          updatedAt
        }
        nextToken
      }
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          status
          fareId
          updatedAt
        }
        nextToken
      }
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          status
          fareId
          updatedAt
        }
        nextToken
      }
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
export const onCreateDestination = /* GraphQL */ `
  subscription OnCreateDestination {
    onCreateDestination {
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
export const onUpdateDestination = /* GraphQL */ `
  subscription OnUpdateDestination {
    onUpdateDestination {
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
export const onDeleteDestination = /* GraphQL */ `
  subscription OnDeleteDestination {
    onDeleteDestination {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle {
    onCreateVehicle {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle {
    onUpdateVehicle {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle {
    onDeleteVehicle {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateFare = /* GraphQL */ `
  subscription OnCreateFare {
    onCreateFare {
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
export const onUpdateFare = /* GraphQL */ `
  subscription OnUpdateFare {
    onUpdateFare {
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
export const onDeleteFare = /* GraphQL */ `
  subscription OnDeleteFare {
    onDeleteFare {
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
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog {
    onCreateLog {
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
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog {
    onUpdateLog {
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
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog {
    onDeleteLog {
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
