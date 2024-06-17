import './ProjectsBrowse.css';
import CustomButtonWithIcon from '../../../../compontents/custom_button_with_icon/CustomButtonWithIcon';
import TextEditor from '../../../../compontents/text_editor/TextEditor';
import React, { useState } from 'react';

function ProjectsBrowse() {
    const [comments, setComments] = useState([
        // wyświetlanie komentarzy, przygotowane żeby szybciej zaimplementować
        // Dodawanie z backendu
        { id: 1, user: "Damian", time: "2 godziny temu", text: "To jest testowy komentarz" },
        
    ]);

    const [editorText, setEditorText] = useState("");

    const handleEditorChange = (value) => {
        setEditorText(value);
    };

    const handleSaveComment = () => {
        // jeżeli nic nie jest wpisane to po prostu nic nie zwracam
        if (editorText.trim() === "") return;

        // a jak jednak coś innego niż pusty string to
        // id zmieniam samemu - domyślnie będzie to pobieranie z api
        // user i time też z api, jedynie w text wpisuję zawartość z [TextEditor]
        const newComment = {
            id: comments.length + 1,
            user: "Damian",
            time: "Teraz",
            text: editorText
        };

        setComments([...comments, newComment]);
        setEditorText(""); 
    };

    return (
        <div className="w-100 p-4">
        <div className="projects-browse row">
                    <div className="content-left">
                        <h3>Nazwa projektu</h3>
                        <div className="buttons">
                            <div className="row">
                                <CustomButtonWithIcon
                                    icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"></path></svg>}
                                    text="Załącz"
                                    id="custom-button" />
                                <CustomButtonWithIcon
                                    icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" ><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg>}
                                    text="Połącz zgłoszenie"
                                    id="custom-button" />
                                <CustomButtonWithIcon
                                    icon={<img src="https://team.atlassian.com/Images/logos/linked-goals-jira.svg" width="24px" height="24px" title="Link goals" alt="" draggable="false" />}
                                    text="Link goals"
                                    id="custom-button" />
                                <CustomButtonWithIcon
                                    icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" ><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>}
                                    id="custom-button" />
                            </div>
                        </div>
                        <h4>Opis projektu</h4>
                        <h6>Dalszy opis projektu</h6>
                        <div className="d-flex col column-additional-title">
                            <div className="row">
                                Załączniki 
                                <div className="d-flex circle-number-notification">1</div>
                            </div>
                            <div className="row">
                                <CustomButtonWithIcon
                                    icon={<svg width="16" height="16" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" ><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>}
                                    id="custom-button" />
                                <CustomButtonWithIcon
                                    icon={<svg width="16" height="16" viewBox="0 0 24 24" role="presentation"><path d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z" fill="currentColor" fill-rule="evenodd"></path></svg>}
                                    id="custom-button" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="box-element">
                            <div className="additional-box-info">
                                <div className="img-wrapper">
                                    <img height="80" src="https://th.bing.com/th/id/OIP.Je556A6cSKhkiRBsNmZOBQHaEK?rs=1&pid=ImgDetMain" />
                                    <div className="img-hover"></div>
                                </div>
                                <div className="additional-text-wrapper col">
                                    <p className="fw-bold">Zadanie1.cs</p>
                                <p className="fw-thin">12 maj 2024, 12:54 AM</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <h4>Aktywność</h4>
                        <div className="d-flex col comment-section">
                            <div className="d-flex">
                                <h4 className="fw-light">Pokaż: </h4>
                                <CustomButtonWithIcon
                                    icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fill-rule="evenodd"></path></svg>}
                                    id="custom-button"
                                    text="Pokaż aktywność"                              />
                            </div>
                            <div className="d-flex bg-none">
                                <CustomButtonWithIcon
                                    icon={<svg role="presentation" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M6.8,4.3 C6.6,4.1 6.3,4 6,4 C5.7,4 5.4,4.1 5.2,4.3 L2.3,7.2 C1.9,7.6 1.9,8.3 2.3,8.7 C2.7,9.1 3.3,9.1 3.7,8.7 L5,7.4 L5,19.1 C5,19.6 5.4,20 6,20 C6.6,20 7,19.6 7,19.1 L7,7.4 L8.3,8.7 C8.7,9.1 9.3,9.1 9.7,8.7 C10.1,8.3 10.1,7.6 9.7,7.2 C9.04754611,6.54754611 8.5582057,6.0582057 8.23197876,5.73197876 C7.91376126,5.41376126 7.436435,4.936435 6.8,4.3 Z" id="Path" fill="currentColor" fill-rule="nonzero" transform="translate(6.000000, 12.000000) rotate(180.000000) translate(-6.000000, -12.000000) "></path><path d="M21,5 L13,5 C12.4,5 12,5.4 12,6 C12,6.6 12.4,7 13,7 L21,7 C21.6,7 22,6.6 22,6 C22,5.4 21.6,5 21,5 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path><path d="M13,13 L18,13 C18.6,13 19,12.6 19,12 C19,11.4 18.6,11 18,11 L13,11 C12.4,11 12,11.4 12,12 C12,12.6 12.4,13 13,13 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path><path d="M13,19 L16,19 C16.6,19 17,18.6 17,18 C17,17.4 16.6,17 16,17 L13,17 C12.4,17 12,17.4 12,18 C12,18.6 12.4,19 13,19 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path></g></svg>}
                                    id="custom-button"
                                    text="Najpierw najnowsze" />
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="avatar-circle d-flex"><p>DW</p></div>
                        <div style={{ display: "grid", width: "100%", marginBottom: "60px"}}>
                            <TextEditor
                                theme="snow"
                                value={editorText}
                                onChange={handleEditorChange}
                                placeholder="Wpisz /ai, aby skorzystać z Atlassian Intelligence, lub @, aby dodać wzmiankę i kogoś powiadomić."
                                style={{ height: "220px" }}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="row buttons-textfield">
                    <CustomButtonWithIcon
                        onClick={handleSaveComment }
                            id="custom-button-save"
                            text="Zapisz" />
                        <CustomButtonWithIcon
                            id="custom-button"
                            text="Anuluj" />
                </div>
                {/* Mapuję po elementach comments, wykonując dla każdego elementu kod w ( ) 
                    Też przygotowane żeby ułatwić sobię przyszłą pracę z api    
                */ }
                {comments.map(comment => (
                    <div className="comment-section" key={comment.id}>
                        <div className="avatar-box">
                            <div className="avatar-box-header">
                                <div className="avatar-circle d-flex"><p>DW</p></div>
                                <div className="user-info col">
                                    <div className="name">{comment.user}</div>
                                    <div className="time">{comment.time}</div>
                                </div>
                            </div>
                            <div className="comment" dangerouslySetInnerHTML={{ __html: comment.text }}></div>
                            <div className="actions">
                                <span className="edit">Edytuj</span>
                                <span className="delete"> Usuń</span>
                            </div>
                        </div>
                    </div>
                ))}

            <div className="column col-right">
                <div className="content-right"></div>
            </div>
            </div>
        </div>
    );
}

export default ProjectsBrowse;
