import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el Todo Pendiente de completar', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('Debe mostrar el Todo completado', () => {
        todo.done = true;
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        );
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        );
        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);
        expect(onToggleTodo).toHaveBeenCalledWith(1);
    });

    test('button debe de llamar el DeleteTodo', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        );
        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);
        expect(onDeleteTodo).toHaveBeenCalledWith(1);
    });
});