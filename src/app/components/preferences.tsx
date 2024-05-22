import { useState } from "react";

type PreferencesProps = {
  Preferences1: string;
  Preferences2: string;
  country: string;
  city: string;
  zipCode: number;
  company: string;
  phoneNumber: string;
};

const Preferences = ({
  Preferences1,
  Preferences2,
  country,
  city,
  zipCode,
  company,
  phoneNumber,
}: PreferencesProps) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTwo(!checkedTwo);
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
        <input type="text" value={phoneNumber} className="outline" required />
      </div>
    </div>
  );
};

export default Preferences;
