type LoginType = {
	id?: number;
	first_name?: string;
	name?: string;
	last_name?: string;
	email?: string;
	password?: string;
    confirm_password?: string;
};



type LoginNew = {
	email?: string;
	password?: string;
}


type User = {
	data: {
	  authorization: {
		access_token: string;
	  };
	};
  }

 