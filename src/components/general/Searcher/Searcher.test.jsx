import Searcher from "./index";
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const onSearchMock = jest.fn();

describe("<Searcher />", () => {

    it("Debe renderizarse ambos componentes", async () => {
        // Arrange
        // Act
        render(<Searcher />)
        // Assert
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it("Debe llamar a props.onSearch (click en boton)", async () => {
        // Arrange
        // Act
        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'test' }});
            fireEvent.click(searcherButton);
            expect(onSearchMock).toHaveBeenCalled();
        });
    })

    it("Presionar Enter Debe llamar a props.onSearch ", async () => {

        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        
        act(() => {
            fireEvent.keyDown(searcherInput, {key: 'Enter', code: 'Enter', charCode: 13})
            expect(onSearchMock).toHaveBeenCalled();
        });
    })

    it("No Debe llamar a props.onSearch cuando busqueda es menor a 3 caracteres", async () => {

        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'te' }});
            fireEvent.click(searcherButton);
            expect(onSearchMock).not.toHaveBeenCalled();
        });
    })

    it("Boton debe estar inactivo cuando busqueda en menor a 3 caracteres", async () => {
        // Arrange
        // Act
        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'te' }});
            expect(screen.getByRole('button')).toBeInTheDocument({ disabled: { value: false }})
            
        });
    })
    

    

})