import Link from 'next/link'
import Layout from '../components/Layout'
import { Formik } from 'formik';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
              const errors: any = {};
              if (!values.email) {
                  errors.email = 'Required';
              } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                  errors.email = 'Invalid email address';
              }
              return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
              }, 400);
          }}
      >
          {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                  <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                      Submit
                  </button>
              </form>
          )}
      </Formik>
  </Layout>
)

export default IndexPage
