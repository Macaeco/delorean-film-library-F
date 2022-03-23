import Container from "react-bootstrap/esm/Container";
import "./coments.css"

function Coments() {
    return (
        <Container>
            <section className="add__card-container">
                <div className="form__container">
                    <textarea
                        id="textarea"
                        name="card"
                        cols="10"
                        rows="2"
                        placeholder=" coment"
                        
                    ></textarea>
                    <div className="form__button-container">
                        <button
                           
                            className="form__button"
                            type="submit"
                        >
                            coment
                        </button>
                        <button
                    
                            id="cancel_button"
                            className="form__button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </section>


        </Container>
    )
}
export default Coments;