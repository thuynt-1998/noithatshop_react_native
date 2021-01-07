import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerModal: {
    height: 450,
    zIndex: 100,
    backgroundColor: 'white',
  },
  borderTopRadius: {borderTopLeftRadius: 10, borderTopRightRadius: 10},
  containerImageModal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageSize: {height: 150, width: 150},
  marginLeft10: {marginLeft: 10},
  flexDirectionRow: {flexDirection: 'row'},
  delText: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: 'rgb(173,180,183)',
  },
  priceText: {color: 'rgb(200,149,81)', fontSize: 16},
  colorTextOne: {color: 'rgb(52,35,42)'},
  padding10: {padding: 10},
  containerRadio: {
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  buttonRadio: {
    textAlign: 'center',
    height: 35,
    width: 80,
    marginBottom: 5,
    borderColor: 'rgb(255,237,216)',
    marginRight: 5,
  },
  buttonTextRadio: {
    backgroundColor: 'rgb(255,237,216)',
    paddingTop: 5,
    height: 30,
    width: 75,
    textAlign: 'center',
    fontSize: 14,
  },
  containerButtonActiveRadio: {
    borderColor: 'rgb(200,149,81)',
  },
  textButtonActionRadio: {
    color: 'rgb(200,149,81)',
    backgroundColor: 'white',
  },
  containerNumber: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  colorWhite: {color: 'white'},
  marginButonModal: {
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
  heightButtonModal: {height: 50},
  relative: {position: 'relative', flex: 1},
});
export default styles;
