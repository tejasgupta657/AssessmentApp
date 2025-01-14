import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import mockData from '../constants/mock';

export type Person = {
    name: string;
    skills: string[];
};
const ListScreen: React.FC = () => {

    const renderPersonItem = ({ item }: { item: Person }) => (
        <View style={styles.personContainer}>
            <Text style={styles.personName}>{item.name}</Text>
            <ScrollView horizontal style={styles.skillsContainer} showsHorizontalScrollIndicator={false}>
                {item.skills.map((skill, index) => (
                    <View key={index} style={styles.skillCard}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPersonItem}
                showsVerticalScrollIndicator={false}
                testID="flatlist"
            />
        </View>
    );
};

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: '#f8f8f8',
    },
    personContainer: {
        backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    personName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    skillsContainer: {
        flexDirection: 'row',
    },
    skillCard: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 4,
    },
    skillText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

