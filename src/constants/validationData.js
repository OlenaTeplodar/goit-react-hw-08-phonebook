import * as yup from 'yup';
import "yup-phone";

export const validationAddContact = yup.object().shape({
  name: yup
    .string('Enter name')
    .max(20, 'Name may contain only 20 letters')
    .required(
      'Name is required field. Name may contain only letters, apostrophe, dash and spaces.'
    ),

  // number: yup
  //   .string('Enter number')
  //   .phone(
  //     'UA',
  //     true,
  //     'Invalid phone number.Phone number must start with "+" and have at least 10 digits'
  //   )
  //   .required('Number is required field'),
});

export const validationLogIn = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required field'),
});

export const validationRegister = yup.object().shape({
  name: yup
    .string(' Name may contain only letters, apostrophe, dash and spaces.')
    .required('Name is required field.'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required field'),
});
