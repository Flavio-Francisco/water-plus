import { getMessage } from "@/utils/functions/message";
import React from "react";

const UserCard: React.FC = () => {
  const user = "Flávio";
  const message = getMessage();
  return (
    <div className="bg-transparent flex items-center justify-center ">
      <p className="text-sm text-center text-white">
        {message} {user}
      </p>
    </div>
  );
};

export default UserCard;
