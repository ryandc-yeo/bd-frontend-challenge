import {
  faUser,
  faUserTie,
  faUserNinja,
  faEnvelope,
  faKey,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AccountData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const Account = ({
  firstName,
  lastName,
  username,
  email,
  password,
  confirmPassword,
  updateFields,
}: AccountProps) => {
  return (
    <div className="flex flex-col gap-5 w-[450px] h-[276px]">
      <div className="flex gap-5">
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">First Name</label>
          <FontAwesomeIcon icon={faUser} className="absolute mt-[26px] ml-2" />
          <input
            type="text"
            autoFocus
            value={firstName}
            placeholder="Joe"
            className="bg-gray-300 leading-9 pl-8"
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">Last Name</label>
          <FontAwesomeIcon
            icon={faUserTie}
            className="absolute mt-[26px] ml-2"
          />
          <input
            type="text"
            placeholder="Bruin"
            className="bg-gray-300 leading-9 pl-8"
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          Username <span className="text-red-500">*</span>
        </label>
        <FontAwesomeIcon
          icon={faUserNinja}
          className="absolute mt-[26px] ml-2"
        />
        <input
          type="text"
          value={username}
          placeholder="joebruin"
          className="bg-gray-300 leading-9 pl-8"
          required
          onChange={(e) => updateFields({ username: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          Email Address <span className="text-red-500">*</span>
        </label>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="absolute mt-[26px] ml-2"
        />
        <input
          type="email"
          value={email}
          placeholder="joebruin@ucla.edu"
          className="bg-gray-300 leading-9 pl-8"
          required
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">
            Password <span className="text-red-500">*</span>
          </label>
          <FontAwesomeIcon icon={faKey} className="absolute mt-[26px] ml-2" />
          <input
            type="password"
            value={password}
            className="bg-gray-300 leading-9 pl-8"
            required
            onChange={(e) => updateFields({ password: e.target.value })}
          />
          {password.length < 10 && password.length > 0 && (
            <p className="text-red-500 text-xs">
              ** must be at least 10 characters
            </p>
          )}
        </div>
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <FontAwesomeIcon
            icon={faFingerprint}
            className="absolute mt-[26px] ml-2"
          />
          <input
            type="password"
            value={confirmPassword}
            className="bg-gray-300 leading-9 pl-8"
            required
            onChange={(e) => updateFields({ confirmPassword: e.target.value })}
          />
          {password !== confirmPassword && password && confirmPassword && (
            <p className="text-red-500 text-xs">** passwords do not match</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
