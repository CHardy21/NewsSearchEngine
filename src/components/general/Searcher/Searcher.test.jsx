import Searcher from "./index";
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const onSearchMock = jest.fn();

describe("<Searcher />", () => {

    it("Debe renderizarse ambos componentes (input y button)", async () => {
        // Arrange
        // Act
        render(<Searcher />)
        // Assert
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it("Boton debe estar inactivo cuando busqueda < 3 caracteres", async () => {
        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'te' }});
            expect(screen.getByRole('button')).toBeInTheDocument({ disabled: { value: false }})
        });
    })

    it("Click en Button Debe llamar a props.onSearch", async () => {
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

    it("Click en Button NO Debe llamar a props.onSearch si busqueda < 3 caracteres", async () => {

        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'te' }});
            fireEvent.click(searcherButton);
            expect(onSearchMock).not.toHaveBeenCalled();
        });
    })

    it("Presionar Enter Debe llamar a props.onSearch si busqueda > 3 caracteres", async () => {

        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        
        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'test' }});
            fireEvent.keyDown(searcherInput, {key: 'Enter', code: 'Enter', charCode: 13})
            expect(onSearchMock).toHaveBeenCalled();
        });
    })

    it("Presionar Enter NO Debe llamar a props.onSearch si busqueda < 3 caracteres", async () => {

        render(<Searcher onSearch={onSearchMock}/>);
        const searcherInput = screen.getByRole('textbox');
        
        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'te' }});
            fireEvent.keyDown(searcherInput, {key: 'Enter', code: 'Enter', charCode: 13})
            expect(onSearchMock).not.toHaveBeenCalled();
        });
    })



    

    

})