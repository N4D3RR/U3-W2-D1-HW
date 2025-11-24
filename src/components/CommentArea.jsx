import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlN2Y0YmQ0NzAwMTU4NWIxZDEiLCJpYXQiOjE3NjM5ODc1ODMsImV4cCI6MTc2NTE5NzE4M30.yvSHyY3iqe5rOfokKMGgvd-Sq8hzlXgg3N9T377ZgDs",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidMount() {
    if (this.props.asin) {
      //se c'è un asin carico i commenti
      this.fetchComments()
      console.log("COMPONENTDIDMOUNT")
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      //se l'asin cambia, rifaccio la fetch
      this.fetchComments()
      console.log("COMPONENTDIDUPDATE")
    }
  }
  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea
