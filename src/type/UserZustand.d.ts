type UserStoreType = {
	token: string | null;
	setToken: (token?: string) => void;
};


type UserDataType = {
	id: number;
	token: string;
  }

  type CustomUser  =  {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile_no: string;
    customer_no: string;
    email_verified_at: string | null;
    google_id: string | null;
    profile_image: string | null;
    status: string;
    authorization: {
      access_token: string;
      token_type: string;
      expires_in: number;
    }
}
