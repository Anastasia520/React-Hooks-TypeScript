import { useState, useEffect, useMemo } from "react";

export interface Cars {
  name: string;
  number: string;
}

function useFetchData<Payload>(url: string): {
  data: Payload[] | null;
  isDone: boolean;
} {
  const [data, setData] = useState<Payload[] | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: Payload[]) => {
        setData(data);
        setIsDone(true);
      });
  }, []);
  return {
    data,
    isDone,
  };
}

export default function CustomHookComponent() {
  const { data } = useFetchData<Cars>("/cars.json");

  const menorizedCars = useMemo(
    () => (data || []).filter((car) => car.name.includes("Audi")),
    [data]
  );

  return (
    <>
      {menorizedCars.length && (
        <div>
          {data![0].name} - {data![0].number}
        </div>
      )}
    </>
  );
}
