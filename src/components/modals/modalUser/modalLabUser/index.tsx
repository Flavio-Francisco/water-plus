import React from "react";
import { Modal } from "react-bootstrap";
import LabTabs from "../../modalUI";
import OperatorFormEdit from "../newForm";
import UserList from "@/components/modals/modalUser/userList";
import "./styles.css";
import { getUserDB } from "@/app/fecth/user";
import { useUserContext } from "@/context/userContext";
import { UserModel } from "@/utils/models/userModel";
import { useQuery } from "@tanstack/react-query";
interface Iprops {
  // refech: () => void;
  onUpdate: (success: boolean) => void;
}
export default function ModalLabUser({ onUpdate }: Iprops) {
  const { user } = useUserContext();

  const { data, refetch } = useQuery<UserModel[]>({
    queryKey: ["userModal"],
    queryFn: () => getUserDB(user?.system_id || 0),
  });

  return (
    <Modal.Body>
      <LabTabs
        ComponetNew={
          <div>
            <UserList data={data} onUpdate={onUpdate} refech={refetch} />
          </div>
        }
        ComponetEdit={
          <div>
            <OperatorFormEdit />
          </div>
        }
      />
    </Modal.Body>
  );
}
