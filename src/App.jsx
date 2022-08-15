import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import SectionLeft from './components/section/section-left'
import SectionRight from './components/section/section-right'
import SectionDouble from './components/section/double'
import Testimonials from './components/section/testimonials'
import Gallery from './components/section/gallery'
import Footer from './components/footer/footer'

class App extends React.Component {

 
  constructor(props) {
    super(props);
    this.settings = 
      {
        showMobileMenu: false,
        windowSize: 0,
        isMobile: false,
      }
    
    this.testimonials = [
      {
        id: 0,
        name: 'Emily R.',
        pos: 'Marketing Director',
        desc: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        img: 'src/assets/resources/image-emily.jpg'
      },
      {
        id: 1,
        name: 'Thomas S.',
        pos: 'Chief Operating Officer',
        desc: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        img: 'src/assets/resources/image-thomas.jpg'
      },
      {
        id: 2,
        name: 'Jennie F.',
        pos: 'Business Owner',
        desc: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        img: 'src/assets/resources/image-jennie.jpg'
      },
    ],
    this.gallery = ['src/assets/resources/desktop/image-gallery-milkbottles.jpg', 'src/assets/resources/desktop/image-gallery-orange.jpg', 'src/assets/resources/desktop/image-gallery-cone.jpg', 'src/assets/resources/desktop/image-gallery-sugarcubes.jpg' ]
  };
  render() {
    
   
    return (
      <div className="App">
          <Navbar
            settings={this.settings}
          />
          <Home/>
          <SectionLeft
              id="section__1"
              title="Transform your brand"
              desc=" We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
              order="right"
              img_path="src/assets/resources/desktop/image-transform.jpg" 
          />
         
          <SectionRight
              id="section__2"
              title="Stand out to the right audience"
              desc="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
              order="left"
              img_path="src/assets/resources/desktop/image-stand-out.jpg" 
          />
          <SectionDouble
            id="section__3"
            title_l="Graphic Design"
            desc_l="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention."
            img_path_l="../src/assets/resources/desktop/image-graphic-design.jpg" 
            title_r="Photography"
            desc_r="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            img_path_r="src/assets/resources/desktop/image-photography.jpg" 
          />
          <Testimonials
            id="testimonials"
            testimonials={this.testimonials}
          />
          <Gallery
            id="gallery"
            gallery={this.gallery}
          />
          <Footer/>
      </div>
  )
  }
  
}

export default App
