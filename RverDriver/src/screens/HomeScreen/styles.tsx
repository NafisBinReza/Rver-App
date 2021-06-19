import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  balanceContainer: {
    top: 10,
    width: 100,
    right: (Dimensions.get('window').width / 2) - 50,
    backgroundColor: 'black',
    height: 40,
    position: 'absolute',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  balanceContainerText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 2.5
  },
  roundButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  centerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height - 140,
    right: (Dimensions.get('window').width / 2) - 37.5,
    width: 75,
    height: 75,
    backgroundColor: '#2887e0',
    borderRadius: 50,
    elevation: 5
  },
  centerButtonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  },
  bottomContainerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333'
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 5
  }
});
