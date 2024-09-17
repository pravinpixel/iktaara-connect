type UserStoreType = {
	token: string | null;
	setToken: (token?: string) => void;
};


type UserDataType = {
	id: number;
	token: string;
  }
