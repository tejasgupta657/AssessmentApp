import React from 'react';
import { render } from '@testing-library/react-native';
import ListScreen from '../src/screens/ListScreen';
import mockData from '../src/constants/mock';

describe('ListScreen', () => {
    it('should render the list of people correctly', () => {
        const { getByText } = render(<ListScreen />);

        mockData.forEach(person => {
            expect(getByText(person.name)).toBeTruthy();
        });
    });

    it('should render the correct number of skills for each person', () => {
        const { getAllByText } = render(<ListScreen />);

        mockData.forEach(person => {
            person.skills.forEach(skill => {
                expect(getAllByText(skill).length).toBeGreaterThan(0);
            });
        });
    });

    it('should display horizontal scrollable skills for each person', () => {
        const { getAllByText } = render(<ListScreen />);

        mockData.forEach(person => {
            person.skills.forEach(skill => {
                expect(getAllByText(skill).length).toBeGreaterThan(0);
            });
        });
    });

    it('renders the FlatList and passes the correct props', () => {
        const { getByTestId } = render(<ListScreen />);
        const flatList = getByTestId('flatlist');

        expect(flatList.props.data).toEqual(mockData);
    });
});
