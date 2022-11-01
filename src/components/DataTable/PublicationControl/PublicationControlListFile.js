import { Document, Page, Text, View } from '@react-pdf/renderer';
import React from "react";
import styles from './PublicationControlListStyle';

export default function PublicationControlListFile({ list }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={[styles.h1, styles.mb8]}>Неопубликованные судебные акты</Text>

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
                  <Text style={styles.boldRowText}>{item.PARTS_FIO}</Text>
                  <Text>{item.DATE_UNTILL !== null ? `Опубликовать до: ${item.DATE_UNTILL}` : "Не вступило"}</Text>
                  <Text>Рассм.: {item.VERDICT_DATE}</Text>
                  <Text style={styles.smallRowText}>{item.PUBLICATION_STATUS}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
