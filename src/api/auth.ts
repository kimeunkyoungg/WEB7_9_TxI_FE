import { apiClient } from "@/lib/axios";
import type {
	LoginRequest,
	LoginResponse,
	SignupRequest,
	SignupResponse,
} from "@/types/auth";

export const authApi = {
	signup: async (data: SignupRequest): Promise<SignupResponse> => {
		const response = await apiClient.post<SignupResponse>(
			"/api/v1/auth/signup",
			data,
		);
		return response.data;
	},

	login: async (data: LoginRequest): Promise<LoginResponse> => {
		const response = await apiClient.post<LoginResponse>(
			"/api/v1/auth/login",
			data,
		);
		return response.data;
	},

	logout: async (): Promise<void> => {
		await apiClient.post("/api/v1/auth/logout");
	},
};
