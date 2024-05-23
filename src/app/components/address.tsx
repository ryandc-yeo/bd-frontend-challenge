import {
  faHouse,
  faAddressBook,
  faLocationDot,
  faPhone,
  faCity,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AddressData = {
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: string;
  company: string;
  phoneNumber: string;
};

type AddressProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const Address = ({
  address1,
  address2,
  country,
  city,
  zipCode,
  company,
  phoneNumber,
  updateFields,
}: AddressProps) => {
  return (
    <div className="flex flex-col gap-5 w-[450px] h-[276px]">
      <div className="flex gap-5">
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">
            Address <span className="text-red-500">*</span>
          </label>
          <FontAwesomeIcon
            icon={faAddressBook}
            className="absolute mt-[26px] ml-2"
          />
          <input
            type="text"
            autoFocus
            value={address1}
            className="bg-gray-300 leading-9 pl-8"
            onChange={(e) => updateFields({ address1: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col w-[47.5%]">
          <label className="text-xs">Apartment, Suite, etc.</label>
          <FontAwesomeIcon icon={faHouse} className="absolute mt-[26px] ml-2" />
          <input
            type="text"
            value={address2}
            className="bg-gray-300 leading-9 pl-8"
            onChange={(e) => updateFields({ address2: e.target.value })}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-[31%]">
          <label className="text-xs">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            value={country}
            className="bg-gray-300 h-9 leading-9 pl-1"
            onChange={(e) => updateFields({ country: e.target.value })}
            required
          >
            <option value="US">US</option>
          </select>
        </div>
        <div className="flex flex-col w-[30%]">
          <label className="text-xs">
            City <span className="text-red-500">*</span>
          </label>
          <FontAwesomeIcon icon={faCity} className="absolute mt-[26px] ml-2" />
          <input
            type="text"
            value={city}
            className="bg-gray-300 leading-9 pl-8"
            onChange={(e) => updateFields({ city: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col w-[30%]">
          <label className="text-xs">
            Zipcode <span className="text-red-500">*</span>
          </label>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="absolute mt-[26px] ml-2"
          />
          <input
            type="text"
            value={zipCode}
            className="bg-gray-300 leading-9 pl-8"
            placeholder="12345"
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 5) {
                updateFields({ zipCode: value });
              }
            }}
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs">Company</label>
        <FontAwesomeIcon
          icon={faBuilding}
          className="absolute mt-[26px] ml-2"
        />
        <input
          type="text"
          value={company}
          className="bg-gray-300 leading-9 pl-8"
          onChange={(e) => updateFields({ company: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs">Phone Number</label>
        <FontAwesomeIcon icon={faPhone} className="absolute mt-[26px] ml-2" />
        <input
          type="text"
          value={phoneNumber}
          className="bg-gray-300 leading-9 pl-8"
          placeholder="(123) 456-7890"
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Address;
