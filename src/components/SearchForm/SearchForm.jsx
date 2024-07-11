import { Field, Form, Formik } from "formik";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ image: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.image);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
