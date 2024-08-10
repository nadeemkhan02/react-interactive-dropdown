import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Needed for `toBeInTheDocument` matcher
import SearchBoxSelect from '../components/DynamicDropdown';
import '@testing-library/jest-dom';


const mockOnChange = jest.fn();

const defaultProps = {
    selectionList: [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    onChange: mockOnChange,
    name: 'search-box',
    label: 'Search Box',
    isSearchable: true,
};


describe('SearchBoxSelect Component', () => {

    beforeAll(() => {
        global.IntersectionObserver = class {
          constructor() {}
          observe() {}
          disconnect() {}
        };
      });

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    test('renders the component with placeholder', () => {
        render(<SearchBoxSelect {...defaultProps} />);

        expect(screen.getByText('Select an option')).toBeInTheDocument();
        expect(screen.getByText('Search Box')).toBeInTheDocument();
    });

    test('opens dropdown when clicked', () => {
        render(<SearchBoxSelect {...defaultProps} />);

        const dropdown = screen.getByText('Select an option');
        fireEvent.click(dropdown);

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    test('calls onChange when an option is selected', () => {
        render(<SearchBoxSelect {...defaultProps} />);

        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.click(screen.getByText('Option 2'));

        expect(mockOnChange).toHaveBeenCalledWith({ value: 2, label: 'Option 2' });
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    test('renders with a default selected value', () => {
        const propsWithValue = {
            ...defaultProps,
            value: { value: 1, label: 'Option 1' },
        };

        render(<SearchBoxSelect {...propsWithValue} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    test('closes dropdown after selecting an option', () => {
        render(<SearchBoxSelect {...defaultProps} />);

        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.click(screen.getByText('Option 2'));

        expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });

    test('displays all options when search input is cleared', () => {
        render(<SearchBoxSelect {...defaultProps} />);

        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.change(screen.getByPlaceholderText('Search...'), {
            target: { value: 'Option' },
        });

        fireEvent.change(screen.getByPlaceholderText('Search...'), {
            target: { value: '' },
        });

        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });


    test('closes the dropdown when clicking outside', () => {
        render(<SearchBoxSelect {...defaultProps} />);
        const dropdown = screen.getByText('Select an option');
        fireEvent.click(dropdown);
        fireEvent.mouseDown(document);

        expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });

    test('displays options matching search input, case-insensitive', () => {
        render(<SearchBoxSelect {...defaultProps} />);
        fireEvent.click(screen.getByText('Select an option'));
        fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'option 2' } });

        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

});
