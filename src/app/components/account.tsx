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
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">First Name</label>
          <input
            type="text"
            autoFocus
            value={firstName}
            className="bg-gray-300 leading-9 px-3"
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="bg-gray-300 leading-9 px-3"
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={username}
          className="bg-gray-300 leading-9 px-3"
          required
          onChange={(e) => updateFields({ username: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          className="bg-gray-300 leading-9 px-3"
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
            className="bg-gray-300 leading-9 px-3"
            required
            onChange={(e) => updateFields({ password: e.target.value })}
          />
          {password.length < 10 && password.length > 0 && (
            <p className="text-red-500 text-xs">
              ** must be at least 10 characters
            </p>
          )}
        </div>
        <div className="flex flex-col w-[50%]">
          <label className="text-xs">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={confirmPassword}
            className="bg-gray-300 leading-9 px-3"
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
