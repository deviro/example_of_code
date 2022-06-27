import { IRoute } from '../../core/interfaces/IRoute'
// import RNFetchBlob from 'rn-fetch-blob';

export const getQuestRouteType = (single: number, team: number) => {
	if (single && team) {
		return 'Командный и одиночный'
	} else if (single) {
		return 'Одиночный'
	} else if (team) {
		return 'Командный'
	} else {
		return 'Неизвестно'
	}
}

export const downloadRoute = (route: IRoute) => {
	// const destPath = RNFetchBlob.fs.dirs.DownloadDir + '/' + 'test.txt'

}
