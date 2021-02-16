import React from "react"
import "./card.css"
import lableData from "../../images/label_data_icon.svg"

export default function Card() {
  return (
    <div className='home-wrap'>
      <div className='action-wrap'>
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
                Label data using Annotation tool and repurpose it for evaluation
                and benchmarking of an AI model
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}

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
                Label data using Annotation tool and repurpose it for evaluation
                and benchmarking of an AI model
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}

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
                Label data using Annotation tool and repurpose it for evaluation
                and benchmarking of an AI model
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
