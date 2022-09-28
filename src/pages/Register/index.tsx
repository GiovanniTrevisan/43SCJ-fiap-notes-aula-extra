import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import FormRegister from "./FormRegister";
import { Container } from "./styles";

function Register() {
  const { handleRegister, authenticated } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if(authenticated) navigate("/home");
  }, [authenticated])

  return (
    <>
      <Container>
        <FormRegister
          handleSubmit={handleRegister}
        />
      </Container>
    </>
  );
}

export default Register;
