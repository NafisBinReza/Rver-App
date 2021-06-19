import React from 'react';
import { View } from 'react-native';
import { IDistanceInfo, IOrder, IUser } from '../../types';
import { convertToBengali } from '../../utils/convertToBengali';
import BasicList from '../BasicList';

interface Props {
  acceptedOrder: IOrder,
  distanceInfo: IDistanceInfo,
}

interface DriveStatusInfoProps {
  distanceInfo: IDistanceInfo
  status: string
  user: IUser
}

function DriveStatusInfo({ status, user, distanceInfo }: DriveStatusInfoProps) {
  return <View style={{ alignItems: 'center', width: '100%' }}>
    <BasicList items={[
      ['স্ট্যাটাস', status === 'picking_up' ? "পৌছনো হচ্ছে" : 'ছেড়ে দেওয়া'],
      ['নাম', `${user.firstName} ${user.lastName}`],
      ['মোবাইল নাম্বার', convertToBengali(user.telephone)],
      ['দূরত্ব', `${convertToBengali(distanceInfo.distance)} কি.মি.`],
      ['সময়', `${convertToBengali((distanceInfo.duration).toFixed(2))} মিনিট`],
    ]} />
  </View>
}

export default function DriveStatus({ acceptedOrder, distanceInfo }: Props) {
  // Dropping off a passenger
  if (acceptedOrder.status === 'dropping_off')
    return <DriveStatusInfo user={acceptedOrder.user} status={acceptedOrder.status} distanceInfo={distanceInfo} />
  // Order has been accepted but still picking up passenger
  else if (acceptedOrder.status === 'picking_up')
    return <DriveStatusInfo user={acceptedOrder.user} status={acceptedOrder.status} distanceInfo={distanceInfo} />
  else return null;
}
