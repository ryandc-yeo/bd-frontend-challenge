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
    <div className="flex flex-col gap-5 w-[450px]">
      <div className="flex flex-col gap-3 text-md pl-5">
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={checkedOne}
            onChange={handleChangeOne}
          />
          Send notifications
        </label>
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={checkedTwo}
            onChange={handleChangeTwo}
          />
          Share infromation with related marketer
        </label>
      </div>
      <div className="flex flex-col">
        <label className="text-xs">Notification Preferences</label>
        <select
          value={notificationPreferences}
          onChange={(e) =>
            updateFields({
              notificationPreferences: e.target.value as "email" | "text",
            })
          }
          className="bg-gray-300 h-9 leading-9 px-3"
          required
        >
          <option value="email">Email</option>
          <option value="text">Text</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;
