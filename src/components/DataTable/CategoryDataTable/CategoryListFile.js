import React from "react";
import { Document, Page, Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import styles from './CategoryListStyle';

export default function CategoryListFile({ list, title }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={[styles.h1, styles.mb8]}>{title}</Text>

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
              <View style={styles.tableRow} key={key}>
                <View style={styles.tableCell_1}>
                  <Text>{item.PREFIX}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text style={styles.boldRowText}>{item.NAME}</Text>
                  {item.F1 ? <Text  style={styles.smallRowText}>{item.F1}</Text> : ''}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

CategoryListFile.propTypes = {
  list: PropTypes.array.isRequired,
};
