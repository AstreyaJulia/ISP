import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './CategoryListStyle';

export default function CategoryListFile({ list }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={[styles.h1, styles.mb8]}>Категории гражданских дел</Text>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.tableHeaderText}>Префикс</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.tableHeaderText}>Категория</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableBody}>
            {list.map((item, key) => (
              <View style={styles.tableRow} key={item.VA_CODE + key}>
                <View style={styles.tableCell_1}>
                  <Text>{item.PREFIX}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text>{item.NAME}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
