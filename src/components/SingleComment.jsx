import { Button, ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlN2Y0YmQ0NzAwMTU4NWIxZDEiLCJpYXQiOjE3NjM5ODcxNDQsImV4cCI6MTc2NTE5Njc0NH0.fsMGpI7RD-vV7m4I4GXz0uv80DUcD87hQ6cLg3UR0R0",
          },
        }
      )
      if (response.ok) {
        alert("La recensione è stata elimata!")
      } else {
        throw new Error("La recensione non è stata eliminata!")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
