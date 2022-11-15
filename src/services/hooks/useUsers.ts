import { useQuery } from "react-query";
import { api } from "../api";

interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUsersResponseData {
  totalCount: number;
  users: UserData[];
}

export async function getUsers(page: number): Promise<GetUsersResponseData> {
  const response = await api.get("users", {
    params: {
      page,
    },
  });

  const { data, headers } = response;
  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: UserData) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 5 seconds
  });
}
