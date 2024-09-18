/* eslint-disable @typescript-eslint/no-var-requires */
import zustandStore from "@/utils/helpers/zustand";
const { getSession } = require("next-auth/react");

export async function withAuth(context, callback) {
  const session = await getSession(context);
  zustandStore.setState({
    token: session?.user?.authorization?.access_token || null,
  });
  return await callback(session);
}

export function redirectProps(path = "/") {
  return {
    permanent: false,
    destination: path,
  };
}
