import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert').mockImplementation(jest.fn());

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('should show an alert when email is empty', () => {
    const { getByText } = render(<HomeScreen />);
    const submitButton = getByText('Submit');

    fireEvent.press(submitButton);

    expect(Alert.alert).toHaveBeenCalledWith('Email is required');
  });

  it('should show an alert when email is invalid', () => {
    const { getByText, getByPlaceholderText } = render(<HomeScreen />);
    const emailInput = getByPlaceholderText('Enter your email');
    const submitButton = getByText('Submit');

    fireEvent.changeText(emailInput, 'invalid-email');
    fireEvent.press(submitButton);

    expect(Alert.alert).toHaveBeenCalledWith('Please enter a valid email');
  });

  it('should navigate to the List screen when email is valid', () => {
    const { getByText, getByPlaceholderText } = render(<HomeScreen />);
    const emailInput = getByPlaceholderText('Enter your email');
    const submitButton = getByText('Submit');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.press(submitButton);

    expect(Alert.alert).toHaveBeenCalledWith(
      'Success',
      'Email submitted successfully',
      expect.any(Array)
    );
  });
});
