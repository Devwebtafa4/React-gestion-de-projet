import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/CarouselImage'; // Le chemin vers ton composant

function Home() {
  return (
    <Carousel>
      {/* Première diapositive avec une seule image */}
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" images={['1.jpg']} />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Une image uniquement dans cette première diapositive.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Deuxième diapositive avec plusieurs images */}
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" images={['2.jpg']} />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Plusieurs images dans cette diapositive.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Troisième diapositive avec plusieurs images */}
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" images={['3.jpg']} />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Encore plus d'images ici !</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
