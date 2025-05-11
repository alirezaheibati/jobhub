import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecordItem() {
  return (
    <div className="flex justify-start items-start gap-2 mb-2 pb-4">
      <div className="flex justify-start flex-col items-center gap-2 p-2 bg-gray-200 rounded-3xl">
        <button>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Front End Developer</h3>
        <p className="text-sm">from:1 to 2</p>
        <p>description goes here</p>
      </div>
    </div>
  );
}
