import { FunctionComponent } from "react";

interface IModalInput {
  name: "firstName" | "lastName" | "phone" | "avatarUrl";
  register: Function;
  label?: string;
  required?: boolean;
}

const ModalInput: FunctionComponent<IModalInput> = ({
  name,
  register,
  label,
  required,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label || name}</label>
      <input
        id={name}
        className="w-64 p-2 border-indigo-500 border-2 rounded-md focus:outline-none focus:ring-2 focus:text-indigo-700"
        type="text"
        {...register(name, { required })}
      />
    </div>
  );
};

export default ModalInput;
