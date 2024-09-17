import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    marginTop: 20,
  },
  boxActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 20,
    gap: 10,
    marginTop: 20,
  },
  boxAddress: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    marginTop: 20,
    gap: 15,
    padding: 20,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginTop: 20,  
    marginBottom: 20,
  },
  circleText: {
    fontSize: 30,
    color: 'white',
    letterSpacing: 1,
    fontWeight: '500'
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,

  },
  nip: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
  deleteButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '50%',
    flex: 1,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  editButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '50%',
    flex: 1,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
  },
  textButton: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;