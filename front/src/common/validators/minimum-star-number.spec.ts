import { validateMinimumStarNumber, VALIDATION_TYPE } from './minimum-star-number';
import { FieldValidationResult } from 'lc-form-validation';

describe('validateMinimumStarNumber test', () => {
    describe('starsNumber =>', () => {
        it('should invalidate when startsNumber is higher than 5', () => {
            const viewModel = { rating: 7 };
            // Act
            const result = validateMinimumStarNumber(viewModel.rating, viewModel, 'wrong');
            // Assert
            expect(result).toEqual({
                errorMessage: 'Error. It has to be an integer between 3 and 5',
                key: '',
                succeeded: false,
                type: VALIDATION_TYPE,
            } as FieldValidationResult);
        });
        it('should invalidate when startsNumber is lower than 3', () => {
            const viewModel = { rating: 2 };
            // Act
            const result = validateMinimumStarNumber(viewModel.rating, viewModel, 'wrong');
            // Assert
            expect(result).toEqual({
                errorMessage: 'Error. It has to be an integer between 3 and 5',
                key: '',
                succeeded: false,
                type: VALIDATION_TYPE,
            } as FieldValidationResult);
        });
        it('should invalidate when startsNumber is not an integer', () => {
            const viewModel = { rating: 4.6 };
            // Act
            const result = validateMinimumStarNumber(viewModel.rating, viewModel, 'wrong');
            // Assert
            expect(result).toEqual({
                errorMessage: 'Error. It has to be an integer between 3 and 5',
                key: '',
                succeeded: false,
                type: VALIDATION_TYPE,
            } as FieldValidationResult);

        });
        it('should validate when startsNumber is between 3 and 5 both included', () => {
            const viewModel = { rating: 4 };
            // Act
            const result = validateMinimumStarNumber(viewModel.rating, viewModel, 'wrong');
            // Assert
            expect(result).toEqual({
                errorMessage: '',
                key: '',
                succeeded: true,
                type: VALIDATION_TYPE,
            } as FieldValidationResult);
        });
    })
})
