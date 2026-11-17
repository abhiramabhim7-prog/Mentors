import React from 'react'
import { Icon } from '@iconify/react'
export const Fashion = () => {
  const Products = [
    {
      id: 1,
      img: <img src='https://cdn.21st.dev/assets/mirror/ba/baab813e1ee38ecce0d70b0422ac386b9f4786e3318c1ed25be39c2d565c9f5f.jpg' />,
      name: "Benyamin Rolocov",
      role: "Python Developer · 8 Gigs",
      rating: "5.0 (126 Reviews)",
      disc: "Learn from industry professionals offering their services."
    },
    {
      id: 2,
      img: <img src='https://cdn.21st.dev/assets/mirror/e8/e87dd9c3d7e7c987901cef2bcca30db0157a1b51824e8628ccbfb27637ab9902.jpg' />,
      name: "Alexandra Chabon",
      role: "Graphic Designer · 32 Gigs",
      rating: "4.9(154 Reviews)",
      disc: "Creative guidance from seasoned design experts."
    },
    {
      id: 3,
      img: <img src='https://cdn.21st.dev/assets/mirror/b6/b603c193bbeb390c229515b1bd2dee04c9482587c8e7e2e850526b0ff207495b.jpg' />,
      name: "Rezchwag Shibana",
      role: "Strategist & Manager · 79 Gigs",
      rating: "4.8(231 Reviews)",
      disc: "Expert insights for sustainable business growth."
    },
    {
      id: 4,
      img: <img src='https://cdn.21st.dev/assets/mirror/2c/2c41eb0dbdbe2793ee29724f084b185f13463bf42603c4e9292b30112d0d964f.jpg' />,
      name: "Zhang Chiano",
      role: "EO Specialist · 2 Gigs",
      rating: "3.8(16 Reviews)",
      disc: "Unlock your website's potential with proven SEO techniques."
    },
    {
      id: 5,
      img: <img src='https://cdn.21st.dev/assets/mirror/df/df97b507b2514bdf2c110404528f71c007828848d866e9bba2358004cdb55f9f.jpg' />,
      name: "Dr. Evelyn Reed",
      role: "AI Researcher · 15 Gigs",
      rating: "4.9(98 Reviews)",
      disc: "Dive deep into machine learning with a leading researcher."
    },
    {
      id: 6,
      img: <img src='https://cdn.21st.dev/assets/mirror/ec/ec403263c2ba2f3e811004208f9aeee1fc9661da826802c5a26ea7ad11c000ba.jpg' />,
      name: "Marco Verratti",
      role: "UI/UX Lead · 41 Gigs",
      rating: "4.9(310 Reviews)",
      disc: "Design user-centric interfaces that people love to use."
    },

  ]
  return (
    <div className='main'>


      <div className="items">
        {Products.map((Fashion) => {
          return (
            <div className="hero">
              <div className="save">
                <Icon className='icon' icon={'mdi:bookmark-outline '} />

              </div>
              {Fashion.img}
              <h3>{Fashion.name}</h3>
              <p>{Fashion.role}</p>
              <p>{Fashion.rating}</p>
              <p>{Fashion.disc}</p>
            </div>
          )
        }

        )

        }
      </div>

    </div>
  )
}


