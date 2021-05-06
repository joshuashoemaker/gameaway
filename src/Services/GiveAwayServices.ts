import UserSearchRequest from '../Entities/SearchRequest/UserSearchRequest'
import GiveAway from '../Entities/GiveAway/GiveAway'

class GiveAwayServices {
  private static defaultHeaders = {
    "x-rapidapi-key": "feed5d6575mshaa16bc1b2a3f2b9p1aa44ejsne24f85bbbc23",
		"x-rapidapi-host": "gamerpower.p.rapidapi.com"
  }
  

  static async queryApiWithUserSearchRequest(userSearchRequest: UserSearchRequest): Promise<GiveAway[]> {
    const userSearchApiResponse = await fetch(userSearchRequest.apiQueryString, {
      method: 'GET',
      headers: this.defaultHeaders
    })
    // TODO put status code checking
    return userSearchApiResponse.json()
  }
}

export default GiveAwayServices