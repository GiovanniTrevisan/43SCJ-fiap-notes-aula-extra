import { useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote, { FormValueState } from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { FormikHelpers } from "formik";
import FilterInput from "../../components/Filter";

function Home() {
  const { handleLogout, authenticated } = useContext(Context);
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [noteEdit, setNoteEdit] = useState<Note>();
  const [filteredResults, setFilteredResults] = useState<Note[]>([] as Note[]);
  const [querySearch, setQuerySearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await NotesService.getNotes();

      setNotes(response.data);
      setLoading(false);
    })();
  }, []);

  const createNote = useCallback(
    (values: FormValueState, actions: FormikHelpers<FormValueState>) => {
      (async () => {
        const response = await NotesService.postNotes(values);
        setNotes((prevState) => [...prevState, response.data]);

        actions.setSubmitting(false);
        setShowModal(false);
      })();
    },
    [notes]
  );

  const deleteNote = useCallback((id: number) => {
    (async () => {
      await NotesService.deleteNote({ id });
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
    })();
  }, []);

  const editNote = useCallback(
    (values: FormValueState, actions: FormikHelpers<FormValueState>) => {
      (async () => {
        await NotesService.putNote(values);

        setNotes((prevState: Note[]) =>
          prevState.map((note) => {
            return note.id === values.id ?
              {
                ...note,
                text: values.text,
                urgent: values.urgent,
              } : note;
          }));

        setShowModal(false);

      })();
    },
    [notes]
  );

  const editNoteModal = useCallback(
    (note: Note) => {
      setNoteEdit(note);
      setShowModal(true);
    }, []);

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  const setSortType = (event: any) => {
    setSelectedOrder(event.target.value);
    const order = event.target.value;
    const callbackSetNotes = (prevState: Note[]) => {
      switch (order) {
        case 'A-Z':
          prevState = prevState.sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
          break;
        case 'Z-A':
          prevState = prevState.sort((a, b) => a.text < b.text ? 1 : a.text > b.text ? -1 : 0);
          break;
        case 'urgente':
          prevState = prevState.sort((a, b) => !a.urgent ? 1 : a.urgent ? -1 : 0);
          break;
        default:
          prevState = prevState.map((note) => note);
      }
      return prevState;
    };
    setNotes(callbackSetNotes);
  };

  const filterNotes = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputquerySearch = event.target.value;
      setQuerySearch(inputquerySearch);
      const filteredResultNotes = notes.filter(note => {
        return Object.values(note).join('').toLowerCase().includes(inputquerySearch.toLowerCase())
      })
      setFilteredResults(filteredResultNotes);
    },
    [notes]
  );


  return (
    <>
      {loading && <Loading />}
      {showModal && (
        <Modal
          title="Nota:"
          handleClose={() => setShowModal(false)}
          style={{ width: "100px" }}
        >
          <FormNote
            handleSubmit={createNote}
            handleSubmitEdit={editNote}
            noteEditValue={noteEdit}
          />
        </Modal>
      )}

      <Container>
        {
          querySearch.length > 1 ? (
            filteredResults.map((note) => (
              <CardNote
                key={note.id}
                handleEdit={editNoteModal}
                handleDelete={deleteNote}
                note={note}
              ></CardNote>))
          ) : (
            notes.map((note) => (
              <CardNote
                key={note.id}
                handleEdit={editNoteModal}
                handleDelete={deleteNote}
                note={note}
              ></CardNote>))
          )
        }

        <FilterInput handleTextType={filterNotes} placeholder="Buscar notas" />

        <select defaultValue={'A-Z'} onChange={setSortType} className="select-order">
          <option value="A-Z">A-Z (Asc)</option>
          <option value="Z-A">Z-A (Desc)</option>
          <option value="urgente">Urgência</option>
        </select>
        <FabButton position="left" handleClick={() => {
          setShowModal(true)
          setNoteEdit(undefined);
        }}>
          +
        </FabButton>
        <FabButton position="right" handleClick={handleLogout}>
          <span className="material-icons">logout</span>
        </FabButton>
      </Container>
    </>
  );
}

export default Home;