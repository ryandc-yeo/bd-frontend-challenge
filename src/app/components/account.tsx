type AccountProps = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Account = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword,
}: AccountProps) => {
  return (
    <div className="flex flex-col gap-5 w-fit">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label>First Name</label>
          <input type="text" autoFocus value={firstName} className="outline" />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input type="text" value={lastName} className="outline" />
        </div>
      </div>
      <div className="flex flex-col">
        <label>
          Username <span className="text-red-500">*</span>
        </label>
        <input type="text" value={userName} className="outline" required />
      </div>
      <div className="flex flex-col">
        <label>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input type="text" value={email} className="outline" required />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label>
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            className="outline"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={confirmPassword}
            className="outline"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
