import { useState } from "react";

type PreferencesData = {
  wantsNotifications: boolean;
  shareInformation: boolean;
  notificationPreferences: "email" | "text";
};

type PreferencesProps = PreferencesData & {
  updateFields: (fields: Partial<PreferencesData>) => void;
};

const Preferences = ({
  wantsNotifications,
  shareInformation,
  notificationPreferences,
  updateFields,
}: PreferencesProps) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    wantsNotifications = !checkedOne;
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    shareInformation = !checkedTwo;
  };

  return (
    <div className="flex flex-col gap-5 w-fit">
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            checked={checkedOne}
            onChange={handleChangeOne}
          />
          Send notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedTwo}
            onChange={handleChangeTwo}
          />
          Share infromation with related marketer
        </label>
      </div>
      <div className="flex flex-col">
        <label>Notification Preferences</label>
        <input
          type="text"
          value={notificationPreferences}
          className="outline"
          required
        />
      </div>
    </div>
  );
};

export default Preferences;
