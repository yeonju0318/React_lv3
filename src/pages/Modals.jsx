import React from "react";
import { Modal, Modal2 } from "../components/modal/Modal";
import { useState } from "react";
import { Button, ButtonContainor } from "../components/button/button";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState();
  const [isModalOpen2, setIsModalOpen2] = useState();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  return (
    <>
      <h1>Modal</h1>
      <ButtonContainor>
        <Button
          onClick={openModal}
          borderColor="#55efc4"
          backgroundColor="#55efc4"
        >
          Open Modal
        </Button>
        <Button
          onClick={openModal2}
          borderColor="#FAB1A0"
          backgroundColor="#ffffff"
          fontColor="#d63031"
        >
          Open Modal2
        </Button>
      </ButtonContainor>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Modal2 isOpen={isModalOpen2} closeModal2={closeModal2} />
    </>
  );
}

export default Modals;
