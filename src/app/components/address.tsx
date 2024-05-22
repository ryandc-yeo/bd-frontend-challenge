type AddressProps = {
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: number;
  company: string;
  phoneNumber: string;
};

const Address = ({
  address1,
  address2,
  country,
  city,
  zipCode,
  company,
  phoneNumber,
}: AddressProps) => {
  return (
    <div className="flex flex-col gap-5 w-fit">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label>
            Address <span className="text-red-500">*</span>
          </label>
          <input type="text" autoFocus value={address1} className="outline" />
        </div>
        <div className="flex flex-col">
          <label>Apartment, Suite, etc.</label>
          <input type="text" value={address2} className="outline" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label>
            Country <span className="text-red-500">*</span>
          </label>
          <input type="text" value={country} className="outline" />
        </div>
        <div className="flex flex-col">
          <label>
            City <span className="text-red-500">*</span>
          </label>
          <input type="text" value={city} className="outline" />
        </div>
        <div className="flex flex-col">
          <label>
            Zipcode <span className="text-red-500">*</span>
          </label>
          <input type="text" value={zipCode} className="outline" />
        </div>
      </div>
      <div className="flex flex-col">
        <label>Company</label>
        <input type="text" value={company} className="outline" required />
      </div>
      <div className="flex flex-col">
        <label>Phone Number</label>
        <input type="text" value={phoneNumber} className="outline" required />
      </div>
    </div>
  );
};

export default Address;
