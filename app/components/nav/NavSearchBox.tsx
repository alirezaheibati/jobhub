import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NavSearchBox() {
  return (
    <form className="h-12 w-80 lg:w-96 rounded-full relative hidden md:block">
      <button className="h-10 w-10 rounded-full bg-secondary text-primary absolute top-1 left-1 ">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        id=""
        placeholder="Search Job Title"
        className="w-full pl-[52px] h-full rounded-full bg-white text-lg"
      />
    </form>
  );
}
