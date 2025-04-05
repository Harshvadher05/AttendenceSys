import { useState } from "react";

function UserChecking() {
  const [isLogin, setIsLogin] = useState(true);

  const Yes = () => {
    setIsLogin(true);
  };

  const No = () => {
    setIsLogin(false);
  };

  return {
    isLogin,
    Yes,
    No,
  };
}

export default UserChecking;
