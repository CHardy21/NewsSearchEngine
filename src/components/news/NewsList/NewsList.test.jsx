import NewsList from "./index";
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const onSearchMock = jest.fn();

describe("<NewsList />", () => {

    it("Debe renderizarse el componete <NewsList />", async () => {
        // Arrange
        // Act
        render(<NewsList />)
        // Assert
        expect(screen.getByRole('newslist')).toBeInTheDocument()
    })



});