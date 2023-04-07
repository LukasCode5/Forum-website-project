import css from './RegisterPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <div className={css.container}>
      <h1>Register Here</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
