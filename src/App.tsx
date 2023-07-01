import { useState } from "react";
import Koder from "./components/Koder";

function App() {
  const [koders, setKoders] = useState<
    Array<{ name: string; lastName: string; age: string }>
  >([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [updating, setUpdating] = useState(false);
  const [indexToUpdate, setIndexToUpdate] = useState(0);

  function uploadKoder() {
    if (!updating) {
      setKoders([{ name, lastName, age }, ...koders]);
    } else {
      koders[indexToUpdate] = { name, lastName, age };
      setKoders(koders);
      setUpdating(false);
    }
    setName("");
    setLastName("");
    setAge("");
  }

  function deleteKoder(index: number) {
    koders.splice(index, 1);
    setKoders([...koders]);
  }

  function updateKoder(index: number) {
    setName(koders[index].name);
    setLastName(koders[index].lastName);
    setAge(koders[index].age);
    setUpdating(true);
    setIndexToUpdate(index);
  }

  return (
    <main className="min-h-screen grid md:grid-cols-2 p-10 bg-[#FFEADD] justify-center gap-8">
      <section className="items-center max-w-sm h-max border-4 border-[#FF6666] rounded-lg flex flex-col gap-3 p-10 mx-auto ">
        <h1 className="text-xl mb-5 font-bold">Introducir Nuevo Koder</h1>
        <label className="w-full" htmlFor="koderName">
          Nombre:
        </label>
        <input
          className="w-full border border-[#FF6666]"
          type="text"
          id="koderName"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label className="w-full" htmlFor="koderLastName">
          Apellido:
        </label>
        <input
          className="w-full border border-[#FF6666]"
          type="text"
          id="koderLastName"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <label className="w-full" htmlFor="koderAge">
          Edad:
        </label>
        <input
          className="w-full border border-[#FF6666]"
          type="number"
          id="koderAge"
          onChange={(event) => setAge(event.target.value)}
          value={age}
        />
        <button
          className="mt-5 w-full p-1 rounded-lg bg-[#FF8989]"
          onClick={uploadKoder}
        >
          Submit
        </button>
      </section>
      <section className="max-w-md flex flex-col gap-3">
        <h2 className="text-xl mb-3 font-semibold">Koders List</h2>
        <p className="italic">
          {koders.length === 0 && "Esta lista está vacía"}
        </p>
        {koders.map((koder, index) => {
          return (
            <Koder
              key={`koder-${index}`}
              name={koder.name}
              lastName={koder.lastName}
              age={koder.age}
              onDelete={() => deleteKoder(index)}
              onEdit={() => updateKoder(index)}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
