import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './ProcessedListStyle';

export default function ProcessedListFile({ list }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={[styles.h1, styles.mb8]}>Дела, находящиеся в производстве</Text>

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
                  <Text style={styles.boldRowText}>{item.CASE_NUMBER}</Text>
                  <Text style={styles.smallRowText}>{item.JUDGE_NAME}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text>{item.PARTS_FIO}</Text>
                  {item?.INFO ? (
                    <Text style={styles.smallRowText}>
                      Рассм. до:{' '}
                      {item?.INFO?.slice(
                        item?.INFO?.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) +
                          39,
                        item?.INFO?.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) +
                          49
                      ) ?? null}
                    </Text>
                  ) : (
                    ''
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

ProcessedListFile.propTypes = {
  list: PropTypes.array.isRequired,
};
