import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar 2 comentários', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário 1 (Teste)'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário 2 (Teste)'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getAllByTestId('comments')).toHaveLength(2)
    })
});