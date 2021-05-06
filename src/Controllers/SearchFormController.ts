import SearchRequest from '../Entities/SearchRequest/SearchRequest'
import UserSearchRequest from '../Entities/SearchRequest/UserSearchRequest'
import GiveAwayServices from '../Services/GiveAwayServices'

class SearchFormController {
  private userSearchRequest = new UserSearchRequest()

  public updateUserSearchRequest(userSearchProps: SearchRequest) {
    this.userSearchRequest.searchProps = userSearchProps
  }

  public async submitUserSearchRequest (): Promise<unknown> {
    const userSearchResponse = await GiveAwayServices.queryApiWithUserSearchRequest(this.userSearchRequest)
    const updateGiveAwayListEvent = new CustomEvent('updatedGiveAwayList', { detail: userSearchResponse })
    document.dispatchEvent(updateGiveAwayListEvent)
    return userSearchResponse
  }
}

export default SearchFormController
