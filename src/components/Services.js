import React from "react"
import { useState } from "react"
import Modal from "react-modal"
import modalContent from "./modalContent"
import "../styles/Modal.scss"
import "../styles/Services.scss"
import webdev from "../images/webdev.svg"
import mobiledev from "../images/mobiledev.svg"
import dataviz from "../images/dataviz.svg"
import automate from "../images/automate.svg"
import times from "../images/modal/modal-icons/times.svg"

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalState, setModalState] = useState(modalContent.webDev)

  const modalIconStyles = {
    one: {
      gridTemplateColumns: "1fr",
    },
    two: {
      gridTemplateColumns: "1fr 1fr",
    },
    three: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  }

  return (
    <div className="services">
      <Modal
        isOpen={modalOpen}
        closeTimeoutMS={300}
        onRequestClose={() => setModalOpen(!modalOpen)}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <article>
          <img
            className="modal-content-close"
            onClick={() => setModalOpen(!modalOpen)}
            src={times}
            alt=""
          />
        </article>

        <img src={modalState.logo} alt="" />
        <main>
          <h1>{modalState.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quia error perferendis quis doloribus earum tenetur, eos tempora
            fugiat itaque expedita quod necessitatibus non iste commodi sit.
            Officiis facilis nemo voluptatibus neque quae ad eveniet.
          </p>
        </main>
        <section>
          <h2>Problems we solve</h2>
          <ul>
            {modalState.problems.map((item, index) => {
              return (
                <li key={index}>
                  <div></div>
                  <p>{item}</p>
                </li>
              )
            })}
          </ul>
        </section>
        <div>
          <h2>Technologies we use</h2>
          <div>
            <ul style={modalIconStyles[modalState.format]}>
              {modalState.icons.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item[0]}</p>
                    <img src={item[1]} alt="" />
                  </li>
                )
              })}
            </ul>
            <button>Start a project</button>
          </div>
        </div>
      </Modal>
      <div className="services-text">
        <h1>How can we help you?</h1>
        <p>Here's a list of the services we offer</p>
      </div>
      <div className="services-glass">
        <div className="services-glass-item one">
          <img src={webdev} alt="" />
          <h2>Web Development</h2>
          <p>
            Need a website? We develop quick and converting web applications
            that look great on all devices.
          </p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen)
              setModalState(modalContent.webDev)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item two">
          <img src={mobiledev} alt="" />
          <h2>Mobile Apps</h2>
          <p>
            Need an app? Our mobile applications deliver a seamless user
            experience to your target audience.
          </p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen)
              setModalState(modalContent.mobileDev)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item three">
          <img src={dataviz} alt="" />
          <h2>Data Analytics</h2>
          <p>
            Got data? We leverage the latest tools to transform data into
            actionable insights for your business.
          </p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen)
              setModalState(modalContent.dataAnaltyics)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item four">
          <img src={automate} alt="" />
          <h2>Automation</h2>
          <p>
            Repetitive tasks? We'll automate your workflow so you can spend more
            time on what matters most.
          </p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen)
              setModalState(modalContent.automation)
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Services
