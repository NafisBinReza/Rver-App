/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDestination = /* GraphQL */ `
  mutation CreateDestination(
    $input: CreateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    createDestination(input: $input, condition: $condition) {
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
export const updateDestination = /* GraphQL */ `
  mutation UpdateDestination(
    $input: UpdateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    updateDestination(input: $input, condition: $condition) {
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
export const deleteDestination = /* GraphQL */ `
  mutation DeleteDestination(
    $input: DeleteDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    deleteDestination(input: $input, condition: $condition) {
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
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createFare = /* GraphQL */ `
  mutation CreateFare(
    $input: CreateFareInput!
    $condition: ModelFareConditionInput
  ) {
    createFare(input: $input, condition: $condition) {
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
export const deleteFare = /* GraphQL */ `
  mutation DeleteFare(
    $input: DeleteFareInput!
    $condition: ModelFareConditionInput
  ) {
    deleteFare(input: $input, condition: $condition) {
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
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
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
export const updateLog = /* GraphQL */ `
  mutation UpdateLog(
    $input: UpdateLogInput!
    $condition: ModelLogConditionInput
  ) {
    updateLog(input: $input, condition: $condition) {
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
export const deleteLog = /* GraphQL */ `
  mutation DeleteLog(
    $input: DeleteLogInput!
    $condition: ModelLogConditionInput
  ) {
    deleteLog(input: $input, condition: $condition) {
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
