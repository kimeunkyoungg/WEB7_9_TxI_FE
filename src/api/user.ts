import { apiClient } from "@/lib/axios";
import type { User, UpdateUserRequest, DeleteUserRequest } from "@/types/user";

export const userApi = {
	getMe: async (): Promise<User> => {
		const response = await apiClient.get<User>("/api/v1/users/me");
		return response.data;
	},

	updateMe: async (data: UpdateUserRequest): Promise<User> => {
		const response = await apiClient.put<User>("/api/v1/users/me", data);
		return response.data;
	},

	deleteMe: async (data: DeleteUserRequest): Promise<void> => {
		await apiClient.delete("/api/v1/users/me", { data });
	},
};
