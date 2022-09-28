import {
  ErrorMessage,
  Field,
  Formik,
  FormikHelpers,
} from "formik";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";
import * as Yup from "yup";
import { Note } from "../../../services/notes/types";

export interface FormValueState {
  id?: number;
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  handleSubmit: (
    payload: FormValueState,
    actions: FormikHelpers<FormValueState>
  ) => void;
  handleSubmitEdit: (
    payload: FormValueState,
    actions: FormikHelpers<FormValueState>
  ) => void;
  noteEditValue?: Note;
}

function FormNote({ handleSubmit, handleSubmitEdit, noteEditValue }: FormNoteProps) {

  const initialValues: FormValueState = {
      id: noteEditValue?.id,
      text: noteEditValue ? noteEditValue.text : '',
      urgent: Boolean(noteEditValue?.urgent),
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        text: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
      })}
      onSubmit={noteEditValue ? handleSubmitEdit : handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as="textarea"
            name="text"
            autoFocus
            placeholder="Insira o texto da nota"
          />
          <ErrorMessage name="text" />
          <Checkbox name="urgent" label="Urgente?" value = {noteEditValue?.urgent} />
          <Button handleClick={() => {}} disabled={isSubmitting}>
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormNote;
