import * as yup from 'yup';

export const checkoutValidation = yup.object({
    'firstName': yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(20, 'Name must no longer than 20 characters long'),
    'lastName': yup
        .string()
        .required('Last Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(20, 'Name must no longer than 20 characters long'),
    'age': yup
        .number()
        .typeError('Age must be a number')
        .required('age is required')
        .min(1, 'Age must be at least 1')
        .max(150, 'Age must be 150 or less'),
    'delivery': yup
        .string()
        .required('Delivery is required'),
    'phone': yup
        .string()
        .required('Phone number is required')
        .matches(/^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/, 'Phone number must match +38(___)___-__-__ format'),
})