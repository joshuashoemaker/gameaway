import GameTypes from '../../StaticData/GameTypes'
import Platforms from '../../StaticData/Platforms'
import SearchRequest from './SearchRequest'


class UserSearchRequest implements SearchRequest {
  private baseUrl = 'https://gamerpower.p.rapidapi.com/api/giveaways'
  public gameType?: GameTypes
  public platform?: Platforms

  constructor (props?: SearchRequest) {
    if (props) this.searchProps = props
  }

  public set searchProps (props: SearchRequest) {
    if (props?.gameType) this.gameType = props.gameType
    if (props?.platform) this.platform = props.platform
  }
   
  public get apiQueryString (): string {
    let queryUrl = new URL(this.baseUrl)

    let urlParamsString = ''
    if (this.platform) urlParamsString += `&platform=${this.platform}`
    if (this.gameType) urlParamsString += `&type=${this.gameType}`
    const parameters = new URLSearchParams(urlParamsString)
    
    queryUrl.search = parameters.toString()
    return queryUrl.toString()
  }
}

export default UserSearchRequest