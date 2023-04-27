import React from "react";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import { Button } from "../components/button/button";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <h1>Modal</h1>
      <Button
        onClick={openModal}
        borderColor="#55efc4"
        backgroundColor="#55efc4"
      >
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default Modals;
