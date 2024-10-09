/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import zustandStore from "@/utils/helpers/zustand";
import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react"
import { ExternalToast, toast } from "sonner"


export async function withAuth(context: GetSessionParams, callback: (session: Session) => Promise<Session>) {
  const session = await getSession(context);
  zustandStore.setState({
    token: session?.user?.authorization?.access_token || null,
  });
  return await callback(session as Session);
}

export function redirectProps(path = "/") {
  return {
    permanent: false,
    destination: path,
  };
}

export const toastConfig: (position?: ToastPosition) => ExternalToast | undefined = (position = 'bottom-right') => ({
  position,
  duration: 4000,
});

export function notify({ error, message = 'Something went wrong!', success }: { error?: string | unknown; message: string; success: boolean } | any) {
  const errorObj: any = error || message;
  switch (success) {
    case true:
      if (Array.isArray(message)) {
        message?.reverse().forEach((msg) => {
          toast.success(msg, toastConfig('top-right'));
        });
        break;
      } else {
        toast.success(message, toastConfig('top-right'));
        break;
      }

    case false:
      if (typeof errorObj === 'object') {
        for (const key in errorObj) {
          const errormessage: string = errorObj[key].message || '';
          toast.error(errormessage, toastConfig('bottom-right'));
        }
      } else if (typeof errorObj === 'string') {
        toast.error(errorObj, toastConfig('bottom-right'));
      } else {
        toast.error(errorObj, toastConfig('bottom-right'));
      }
      break;
    default:
      toast.error(message || 'Something went wrong', toastConfig('bottom-right'));
      break;
  }
}
