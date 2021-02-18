import React from "react"
import { NavLink } from "react-router-dom"
import "./card.css"
import lableData from "../../images/label_data_icon.svg"

export default function Card() {
  return (
    <div className='home-wrap'>
      <div className='test-container'>
        <div className='action-title-wrap'>
          <p> What would you like to do?</p>
        </div>
        <div className='action-wrap'>
          <NavLink exact to='/'>
            <div className='card-wrap'>
              <div className='card-container'>
                <div className='icon-wrap'>
                  <img src={lableData} alt='icon' />
                </div>
                <div className='card-title'>
                  <p>Label Data</p>
                </div>
                <div className='card-content'>
                  <p>
                    Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model
                  </p>
                </div>
              </div>
            </div>
          </NavLink>

          {/* card 2 */}
          <NavLink exact to='/'>
            <div className='card-wrap'>
              <div className='card-container'>
                <div className='icon-wrap'>
                  <img src={lableData} alt='icon' />
                </div>
                <div className='card-title'>
                  <p>Label Data</p>
                </div>
                <div className='card-content'>
                  <p>
                    Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
          {/* card 3 */}
          <NavLink exact to='/'>
            <div className='card-wrap'>
              <div className='card-container'>
                <div className='icon-wrap'>
                  <img src={lableData} alt='icon' />
                </div>
                <div className='card-title'>
                  <p>Label Data</p>
                </div>
                <div className='card-content'>
                  <p>
                    Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
