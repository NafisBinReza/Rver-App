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
      <Text style={styles.sectionText}>ভ্রমণ তথ্য</Text>
      <BasicList items={[
        ['তৈরি হয়েছে', order.createdAt && moment(order.createdAt).fromNow()],
        ['সমাপ্ত হয়েছে', order.completedAt && moment(order.completedAt).fromNow()],
        ['উত্স', order.originAddress.split(",")[0]],
        ['গন্তব্য', order.destinationAddress.split(",")[0]],
      ]} />
      <Text style={styles.sectionText}>যাত্রীর তথ্য</Text>
      <BasicList items={[
        ['যাত্রীর নাম', order.user.firstName + " " + order.user.lastName],
        ['যাত্রীর ব্যবহারকারীর নাম', order.user.username],
        ['যাত্রীর ইমেল', order.user.email],
        ['যাত্রীর টেলিফোন', order.user.telephone],
      ]} />
      <Text style={styles.sectionText}>ভাড়া তথ্য</Text>
      <FareDetails fare={order.fare} />
    </View>)}
    </ScrollView> : <View style={{
      justifyContent: 'center',
      height: '100%',
    }}><Text style={{ margin: 20, fontWeight: 'bold', fontSize: 20, textAlign: 'center', backgroundColor: 'black', borderRadius: 5, color: 'white', padding: 10 }}>আপনি এখনও কোনও আদেশ পান নি</Text></View> : null;
}
