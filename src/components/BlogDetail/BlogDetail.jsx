import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { postsData } from '../data/postsData';
import { Container, Row, Col, Card, Badge, Button, Carousel, ListGroup, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './blogDetail.css';
import { useEffect } from "react";

function BlogDetails() {
    const { id } = useParams();
    const post = postsData.find((post) => post.id.toString() === id);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    if (!post) {
        return <div className="text-center">Post not found!</div>;
    }

    // date, author, readTime,
    const { title, description, image, category, tags, likes, othersImage, comments } = post;

    const handleLike = () => {
        // Implementar lógica para atualizar os likes do post
        console.log('Like added to the post');
    };

    const submitComment = () => {
        // Implementar lógica para adicionar um novo comentário
        console.log('Comment added:', newComment);
        setNewComment('');
    };

    return (
        <Container className="d-flex justify-content-center blog-details-container">
            <Row className="my-5 w-100">
                <Col lg={8}>
                    <Card className="text-center">
                        <Card.Img className="first-image" src={image} alt="Post image" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <div className="d-flex justify-content-center gap-1">
                                <Badge variant="primary">{category}</Badge>
                                {tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="ml-2">{tag}</Badge>
                                ))}
                            </div>
                            <div className="my-2">
                                <Button variant="outline-danger" onClick={handleLike}>
                                    <FontAwesomeIcon icon={faHeart} /> {likes}
                                </Button>
                            </div>
                        </Card.Body>
                        {othersImage && othersImage.length > 0 && (
                            <Carousel>
                                {othersImage.map((img, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        )}
                    </Card>
                    <Card className="mt-4">
                        <Card.Header>Comments</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                {comments.map((comment) => (
                                    <ListGroup.Item key={comment.id}>
                                        <strong>{comment.user}</strong>: {comment.comment}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <form onSubmit={(e) => { e.preventDefault(); submitComment(); }}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Add a comment..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Card.Footer>

                    </Card>
                </Col>
                <Col lg={4} className="sidebar mt-5">
                    <Card>
                        <Card.Header>Ads</Card.Header>
                        <Card.Body>
                            <Alert variant="info" className="mb-4">
                                Confira nossas ofertas especiais!
                            </Alert>
                            <ListGroup className="mb-4">
                                <ListGroup.Item action>
                                    <strong>Promoção 1:</strong> 50% de desconto em produtos selecionados.
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <strong>Promoção 2:</strong> Compre 2, leve 3!
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <strong>Promoção 3:</strong> Sorteio de prêmios todos os dias.
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="d-flex justify-content-between align-items-center">
                                <img src="https://via.placeholder.com/100x100" alt="Ad 1" />
                                <img src="https://via.placeholder.com/100x100" alt="Ad 2" />
                                <img src="https://via.placeholder.com/100x100" alt="Ad 3" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogDetails;
