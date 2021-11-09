import { FiSearch } from "react-icons/fi";
import { useState } from "react";

type SearchFormProps = {
  onSubmit(term: string): void;
};

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form
      className="
          flex
          justify-between
          items-center
          mb-5
        "
      onSubmit={(ev) => {
        ev.preventDefault();

        onSubmit(searchTerm);
      }}
    >
      <input
        className="
           appearance-none
           border-1 
           rounded
           w-full
           py-2
           px-4
           text-gray-700
           leading-7
           h-14
           "
        type="text"
        placeholder="Qual marca quer encontrar?"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
        required
      />
      <button
        type="submit"
        className="
            flex
            items-center
            bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            w-3/12
            h-full
            justify-center
          "
      >
        <span className="hidden md:block">Search</span>
        <FiSearch className="text-2xl md:ml-2" />
      </button>
    </form>
  );
};
