type AccountData = {
  firstName: string;
  lastName: string;
  userName: string;
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
  userName,
  email,
  password,
  confirmPassword,
  updateFields,
}: AccountProps) => {
  return (
    <div className="flex flex-col gap-5 w-[450px] h-[267px]">
      <div className="flex gap-5">
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">First Name</label>
          <input
            type="text"
            autoFocus
            value={firstName}
            className="bg-gray-300 leading-9"
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="bg-gray-300 leading-9"
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={userName}
          className="bg-gray-300 leading-9"
          required
          onChange={(e) => updateFields({ userName: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          className="bg-gray-300 leading-9"
          required
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            className="bg-gray-300 leading-9"
            required
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={confirmPassword}
            className="bg-gray-300 leading-9"
            required
            onChange={(e) => updateFields({ confirmPassword: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
