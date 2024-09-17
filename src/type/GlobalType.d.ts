
type ReactComponentType = {
	children?: React.ReactElement | React.ReactNode;
};

type PaginationType = {
	page?: number;
	per_page?: number;
	search?: string | null;
};

type ParamsType = {
	params: TaskPagination;
	search?: string | null;
	setParams: React.Dispatch<React.SetStateAction<TaskPagination>>;
};

type DocumentsType = {
	id?: number;
	name?: string;
	document?: string;
} & File;
type NotifyType = AxiosError<{
	error?: unknown;
	message?: string;
	success?: boolean;
}>["response"];

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";