import { Component } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    console.log("RENDER")
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook
                  book={b}
                  selectedBook={this.props.selectedBook} //richiamo la funzinoe da app changeselectedbook
                  isSelected={this.props.selectedAsin === b.asin} //controllo che l'asin del libro selezionato di App sia quello del libro che sto mappando. true o false quindi posso selezionare solo un libro alla volta
                />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
