import { useEffect, useState } from "react";
import { ProfileField } from "../components/ProfileField";

export const AccountSection = ({ user }) => {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    if (user) {
      setAccountInfo({
        email: user?.email,
        name: user?.given_name + " " + user?.family_name,
      });
    }
  }, [user]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">
        Account Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        {Object.entries(accountInfo).map(([key, value]) => (
          <ProfileField
            key={key}
            label={
              key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, " $1")
            }
            name={key}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};
