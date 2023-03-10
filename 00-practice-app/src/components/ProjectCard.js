import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({title, desc, img, gitlink, weblink}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../${img}`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">GitHub</Button>
        <Button variant="primary">Website</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;