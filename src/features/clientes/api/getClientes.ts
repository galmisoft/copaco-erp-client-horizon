import { axios } from "@/libs/axios";
import { ICliente, IClientesResponse } from "../types";
import { useQuery } from "@tanstack/react-query";

export const getClientes = async (searchValue: string): Promise<ICliente[]> => {
  const { data }: { data: IClientesResponse } = await axios.get(
    "/api/listarClientes",
    {
      params: {
        busqueda: searchValue,
      },
    }
  );
  return data?.data;
};

export const useClientes = (searchValue: string) => {
  return useQuery({
    queryKey: ["clientes", searchValue],
    queryFn: () => getClientes(searchValue),
    enabled: !!searchValue,
  });
};
