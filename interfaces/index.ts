export interface TypeResponse {
	error: {
		code: number;
		message: string;
	};
	data?: any;
}

export interface TypeDataList {
	items: Array<any>;
	pagination: {
		totalCount: number;
		totalPage: number;
	};
}
