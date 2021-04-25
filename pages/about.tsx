import Link from 'next/link'
import Layout from '../components/Layout'
import { Formik, Form, Field, ErrorMessage } from 'formik';
const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
              const errors : any = {};
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
          {({ isSubmitting }) => (
              <Form>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                      Submit
                  </button>
              </Form>
          )}
      </Formik>
  </Layout>
)

export default AboutPage
