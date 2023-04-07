import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';

const initialValues = {
  email: '',
  username: '',
  password: '',
  repeatPassword: '',
};

function RegisterForm() {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().min(3).required(),
      username: Yup.string().min(5).max(20).required(),
      password: Yup.string().min(6).max(20).required(),
      repeatPassword: Yup.string()
        .min(6)
        .max(20)
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required(),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });

  console.log(formik.touched);

  function rightClassesForInput(field) {
    let rightClasses = '';

    if (formik.touched[field] && formik.errors[field]) {
      rightClasses += 'invalidInput';
    } else {
      rightClasses += 'validInput';
    }

    return rightClasses;
  }

  return (
    <div className={css.container}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          className={`${css[rightClassesForInput('email')]}`}
          type='text'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor='repeatPassword'>Repeat Password:</label>
        <input
          type='password'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
