import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LabTabs from "../../modalUI";
import OperatorFormEdit from "../newForm";
import UserList from "@/components/modals/modalUser/userList"
import './styles.css'
import { getUserDB } from "@/app/fecth/user";
import { useUserContext } from "@/context/userContext";
import { UserModel } from "@/utils/models/userModel";
import { useQuery } from "@tanstack/react-query";

export default function ModalLabUser() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUpdate = (success: boolean) => setShowModal(success);
  const { user } = useUserContext();

  const { data, refetch } = useQuery<UserModel[]>({
    queryKey: ["userModal"],
    queryFn: () => getUserDB(user?.system_id || 0),
  });

  return (
    <>
      <button
        className="p-3 w-full text-lg text-left hover:bg-[#add8e6]"
        onClick={handleShow}
      >
        Usuários
      </button>

      <Modal show={showModal} onHide={handleClose} size="lg" className="mt-10">
        <Modal.Header closeButton>
          <Modal.Title> Usuários</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LabTabs
            ComponetNew={
              <div>
                <OperatorFormEdit />
              </div>
            }
            ComponetEdit={
              <div>
                <UserList
                  data={data}
                  onUpdate={handleUpdate}
                  refech={refetch}
                />
              </div>
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="bg-slate-500 text-lg text-left hover:bg-slate-600"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}