import GameTypes from '../../StaticData/GameTypes'
import Platforms from '../../StaticData/Platforms'

interface SearchRequest {
  gameType?: GameTypes,
  platform?: Platforms
}

export default SearchRequest
