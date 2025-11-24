import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={() => this.props.selectedBook(this.props.book.asin)} //richiamo la funzione da app con l'asin come parametro
          style={{ border: this.props.isSelected ? "3px solid red" : "none" }} //bordo rosso solo su quello selezionato ricavato da bookList ricavato da App
          className="h-100"
        >
          <Card.Img variant="top" src={this.props.book.img} className="h-75" />
          <Card.Body className="h-25">
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
