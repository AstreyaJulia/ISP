import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './NoLastEventsListStyle';

export default function NoLastEventsListFile({ list }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={[styles.h1, styles.mb8]}>Дела, не отмеченные в течение 5 дней после передачи судье, не отмеченные сутки назад без переданных судье</Text>

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
                                    <Text style={styles.smallRowText}>`Дата последнего события: ${item.LAST_EVENT_DATE}`</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
}

NoLastEventsListFile.propTypes = {
    list: PropTypes.array.isRequired,
};
