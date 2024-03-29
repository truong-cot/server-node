// Response
export enum ERROR_CODE {
	THAT_BAI,
	THANH_CONG,
}

export enum ERROR_TEXT {
	THAT_BAI = 'Thất bại',
	THANH_CONG = 'Thành công',
}

export enum STATUS_CODE {
	THANH_CONG = 200,
	CREATE_THANH_CONG = 201,
	CREATE_THANH_CONG_NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
	SERVER = 500,
}

// General
export enum GENDER {
	NAM = 1,
	NU = 2,
	KHAC = 3,
}
