interface Props {
  name: string;
  lastName: string;
  age: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function Koder(props: Props) {
  return (
    <div className="border-2 border-[#FCAEAE] rounded-lg flex place-content-between p-3">
      <div>
        <p>
          <span className="font-bold">Nombre: </span>
          {props.name}
        </p>
        <p>
          <span className="font-bold">Apellido: </span>
          {props.lastName}
        </p>
        <p>
          <span className="font-bold">Edad: </span>
          {props.age}
        </p>
      </div>
      <div className="flex flex-col gap-3 my-auto">
        <button
          className="border-2 font-semibold text-[#FFD6A5] rounded-lg border-[#FFD6A5] bg-[#FFF9DE] w-[100px] h-[35px]"
          onClick={props.onEdit}
        >
          Edit
        </button>
        <button
          className="border-2 font-semibold text-[#FF6666] rounded-lg border-[#FF6666] bg-[#FCAEAE] w-[100px] h-[35px]"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
