import { useUserContext } from "@/context/userContext";
import { getCurrentDate } from "@/utils/functions/FormateDate";
import { getMessage } from "@/utils/functions/message";
import React from "react";

const UserCard: React.FC = () => {
  const { user } = useUserContext();
  const message = getMessage();
  const currentDate = getCurrentDate();

  return (
    <div className="bg-transparent flex flex-col items-center justify-center ">
      <p className="text-sm text-center text-slate-50 w-full mb-0">
        {"   "} {currentDate}
      </p>

      <p className="text-sm text-center text-white">
        {message} {user?.name}
      </p>
    </div>
  );
};

export default UserCard;
