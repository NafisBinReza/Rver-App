import moment from "moment";
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import BasicList from "../../components/BasicList";
import FareDetails from '../../components/FareDetails';
import { RootContext } from '../../navigations/Root';
import styles from "./styles";

export default function PreviousOrders() {
  const { currentUser } = useContext(RootContext);

  return currentUser ?
    currentUser.orders.length !== 0 ? <ScrollView>{currentUser.orders.filter(order => order.status === "completed").sort((orderA, orderB) => (new Date(orderB.createdAt).getTime()) - (new Date(orderA.createdAt).getTime())).map((order, index) => <View key={order.id} style={styles.rowContainer}>
      <View style={styles.indexContainer}>
        <Text style={styles.indexContainerText}>{index + 1}</Text>
      </View>
      <Text style={styles.sectionText}>Travel Info</Text>
      {/* Render the travel related information of the order */}
      <BasicList items={[
        ['Created', order.createdAt && moment(order.createdAt).fromNow()],
        ['Completed', order.completedAt && moment(order.completedAt).fromNow()],
        ['Origin', order.originAddress.split(",")[0]],
        ['Destination', order.destinationAddress.split(",")[0]],
      ]} />
      <Text style={styles.sectionText}>Driver Info</Text>
      {/* Render the driver related information of the order */}
      <BasicList items={[
        ['Driver Name', order.vehicle.user.firstName + " " + order.vehicle.user.lastName],
        ['Driver Username', order.vehicle.user.username],
        ['Driver Email', order.vehicle.user.email],
        ['Driver Telephone', order.vehicle.user.telephone],
      ]} />
      <Text style={styles.sectionText}>Fare Info</Text>
      {/* Render the fare related information of the order */}
      <FareDetails fare={order.fare} />
    </View>)}
    </ScrollView> : <View style={{
      justifyContent: 'center',
      height: '100%',
    }}><Text style={{ margin: 20, fontWeight: 'bold', fontSize: 20, textAlign: 'center', backgroundColor: 'black', borderRadius: 5, color: 'white', padding: 10 }}>You haven't made any requests yet</Text></View> : null;
}
