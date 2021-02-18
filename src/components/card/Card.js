import React from "react"
import { NavLink } from "react-router-dom"
import "./card.css"
import lableData from "../../images/label_data_icon.svg"
import CardTest from "./CardTest"

export default function Card() {
  return (
    <div className='home-wrap'>
      <div className='test-container'>
        <div className='action-title-wrap'>
          <p> What would you like to do?</p>
        </div>
        <div className='action-wrap'>
          <CardTest
            icon={lableData}
            title='Label Data'
            content='Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model'
          />
          <CardTest
            icon={lableData}
            title='Select Data'
            content='Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model'
          />
          <CardTest
            icon={lableData}
            title='Select Data'
            content='Label data using Annotation tool and repurpose it for
                    evaluation and benchmarking of an AI model'
          />
        </div>
      </div>
    </div>
  )
}
