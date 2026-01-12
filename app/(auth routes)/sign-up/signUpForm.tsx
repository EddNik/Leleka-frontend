'use client';
import Link from 'next/link';
import { useFormik } from 'formik';

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      //пока что оставляю консоль лог, позже добавлю отправку на сервера
      console.log('Form data:', values);
    },
  });
  return (
    <div>
      <div>Тут будет картинка(наверное), слева сверху</div>
      <h1>Реєстрація</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* NAME */}
        <div>
          <label htmlFor="name">Імʼя*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше імʼя"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
        </div>
        {/* EMAIL */}
        <div>
          <label htmlFor="email">Пошта*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@leleka.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        {/* PASSWORD */}
        <div>
          <label htmlFor="password">Пароль*</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
            minLength={6} //ВРЕМЕННОЕ РЕШЕНИЕ ПОКА НЕ СОЗДАМ ЛОГИКУ
          />
        </div>
        {/* SUBMIT BUTTON */}
        <button type="submit">Зареєструватись</button>
        {/* УЖЕ ЕСТЬ АКК? пока выдаёт 404 так как проект не собран и нет формы входа*/}
        <p>
          Вже маєте аккаунт?{` `}
          <Link href="/auth/login">Увійти</Link>
        </p>
      </form>
    </div>
  );
}
