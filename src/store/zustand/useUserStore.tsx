import create from 'zustand';
import axios from 'axios';
import { UserInfo, UserResponse, ErrorResponse } from './userTypes'

type UserStore = {
    userInfo: UserInfo | null;
    isLoading: boolean;
    error: string | null;
    register: (userData: UserInfo) => Promise<void>;
    reset: () => void;
};

const useUserStore = create<UserStore>((set) => ({
    userInfo: null,
    isLoading: false,
    error: null,

    register: async (userData: UserInfo) => {
        try {
            set({ isLoading: true });
            const response = await axios.post<UserResponse>('/api/users/register', userData);
            set({ userInfo: response.data.data, isLoading: false });
        } catch (error) {
            let errorMessage = 'An unexpected error occurred';
            if (axios.isAxiosError(error) && error.response) {
                const responseError = error.response as { data: ErrorResponse };
                errorMessage = responseError.data.data.message;
            }
            set({ error: errorMessage, isLoading: false });
        }
    },

    reset: () => set({ userInfo: null, isLoading: false, error: null })
}));

export default useUserStore;
