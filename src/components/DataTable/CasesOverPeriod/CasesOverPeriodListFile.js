import { Page, View, Text, Document } from '@react-pdf/renderer';
import styles from './CasesOverPeriodListStyle';

export default function CasesOverPeriodListFile({ list }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={[styles.h1, styles.mb8]}>Дела, рассмотренные с нарушением срока</Text>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.tableHeaderText}>Номер дела</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.tableHeaderText}>Информация</Text>
              </View>

            </View>
          </View>

          <View style={styles.tableBody}>
            {list.map((item) => (
              <View style={styles.tableRow} key={item.CASE_NUMBER}>
                <View style={styles.tableCell_1}>
                  <Text>{item.CASE_NUMBER}</Text>
                  <Text>{item.JUDGE_NAME}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text>{item.PARTS_FIO}</Text>
                  {item.INFO ? <Text>{item.INFO}</Text> : null}
                </View>

              </View>
            ))}

          </View>
        </View>

      </Page>
    </Document>
  );
}