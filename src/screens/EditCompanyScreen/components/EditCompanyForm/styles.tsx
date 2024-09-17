import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    display: 'flex',
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
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '95%',
    marginTop: 30,
    backgroundColor: 'black',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  textLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    height: 30,
    paddingHorizontal: 20,
    backgroundColor: '#969390',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    borderRadius: 30,
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    // backgroundColor: '#e6e3e3',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 20,
    // marginTop: 10,
    marginBottom: 20,
  },
  insideContainer: {
    display: 'flex',
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  uploadContainer: {
    display: 'flex',
    height: 150,
    minWidth: 250,
    alignSelf: 'center',
    backgroundColor: '#e6e3e3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  imageIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },

  image: {
    maxHeight: 200,
    width: '100%',
    aspectRatio: 1, 
  },
  icon: {
    height: 30,
    width: '100%',
    aspectRatio: 1, 
  },
  deleteButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 20,
  },

});

export default styles;