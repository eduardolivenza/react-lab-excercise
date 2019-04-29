import { FieldValidationResult } from 'lc-form-validation';
import { HotelEditFormValidation } from './hotel-edit.validation';

describe('Hotel Edit Validation tests', () => {
    describe('Field Validations =>', () => {
        it('should invalidate when hotel name does not exist', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'name', "")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: 'Please fill in this mandatory field.',
                        key: 'name',
                        succeeded: false,
                        type: 'REQUIRED'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should invalidate when city does not exist', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'city', "")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: 'Please fill in this mandatory field.',
                        key: 'city',
                        succeeded: false,
                        type: 'REQUIRED'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should invalidate when description does not exist', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'description', "")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: 'Please fill in this mandatory field.',
                        key: 'description',
                        succeeded: false,
                        type: 'REQUIRED'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should validate when name is correct', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'name', "arts")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: '',
                        key: 'name',
                        succeeded: true,
                        type: 'REQUIRED'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should validate when city is correct', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'city', "Berlin")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: '',
                        key: 'city',
                        succeeded: true,
                        type: 'REQUIRED'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should validate when description is correct', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'description', "Correct")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: '',
                        key: 'description',
                        succeeded: true,
                        type: 'MAX_LENGTH'
                    } as FieldValidationResult);
                    done();
                });

        });

        it('should invalidate when description is too long is correct', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'Más de 10 letras para que pete'
            };

            // Act
            HotelEditFormValidation
                .validateField(viewModel, 'description', "Más de 10 letras para que pete")
                .then(fieldValidationResult => {
                    // assert
                    expect(fieldValidationResult).toEqual({
                        errorMessage: 'The value provided is too long. Length must not exceed 10 characters.',
                        key: 'description',
                        succeeded: false,
                        type: 'MAX_LENGTH'
                    } as FieldValidationResult);
                    done();
                });

        });
    });

    describe('Form Validation', () => {
        it('should validate when all the fields are correct', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'desc'
            };

            // Act
            HotelEditFormValidation.validateForm(viewModel).then(formValidationResult => {
                // assert
                expect(formValidationResult.succeeded).toBeTruthy();
                done();
            });

        });

        it('should validate when description has more than 10 characters', (done) => {

            // Arrange
            const viewModel = {
                name: 'arts',
                city: 'Barcelona',
                description: 'More than 10 characters'
            };

            // Act
            HotelEditFormValidation.validateForm(viewModel).then(formValidationResult => {
                // assert
                expect(formValidationResult.succeeded).toBeFalsy();
                done();
            });

        });

        it('should validate when some fields are empty', (done) => {

            // Arrange
            const viewModel = {
                name: '',
                city: 'Barcelona',
                description: 'less10'
            };

            // Act
            HotelEditFormValidation.validateForm(viewModel).then(formValidationResult => {
                // assert
                expect(formValidationResult.succeeded).toBeFalsy();
                done();
            });

        });

    });
});