import React from 'react';
import "./TipModal.scss";
import Modal from './../Modal/Modal';
import { useState } from 'react';

const TipModal = ({
  children
}) => {

  const [showModal, setShowModal] = useState(false);


  return (
      <sup>
        <img
          src="./img/icons/info-icon.png"
          className="tip-modal-icon"
          alt="tip icon"
          onClick={() => setShowModal(true)}
        />
        {
          showModal &&
          <Modal
            width="500px"
            onClose={() => setShowModal(false)}
          >
            <div className="tip-modal">
              {children}
            </div>
          </Modal>}
      </sup>
  );
}

export default TipModal;
