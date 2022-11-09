import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'OpenSans',
  fonts: [{ src: '/fonts/opensans/fonts/OpenSans-Regular.ttf' }, { src: '/fonts/opensans/fonts/OpenSans-Bold.ttf' }],
});

const styles = StyleSheet.create({
  page: {
    padding: '38px 38px 38px 57px',
    fontSize: 11,
    lineHeight: 1.5,
    fontFamily: 'OpenSans',
    backgroundColor: '#fff',
  },

  table: { display: 'flex', width: 'auto' },
  tableHeader: {},
  tableHeaderText: { fontSize: 10, fontWeight: 700 },
  tableBody: {},
  tableRow: {
    padding: '5px 0',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  h1: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 700,
  },
  mb8: { marginBottom: 8 },
  boldRowText: { fontWeight: 700 },
  smallRowText: { fontSize: 10 },

  tableCell_1: { width: '25%' },
  tableCell_2: { paddingRight: 16, width: '95%' },
});

export default styles;
