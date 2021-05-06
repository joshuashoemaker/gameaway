import { Component } from 'react'
import { Paper, TextField, MenuItem, Fab } from '@material-ui/core'
import './Search.css'

import Platforms from '../../StaticData/Platforms'
import GameTypes from '../../StaticData/GameTypes'
import SearchFormController from '../../Controllers/SearchFormController'
import { SearchRounded } from '@material-ui/icons'

interface SearchViewState {
  platformInputValue: Platforms,
  gameTypeInputValue: GameTypes
}

class Search extends Component<{}, SearchViewState> {
  private controller = new SearchFormController()
  private defaultPlatform = Platforms.PC
  private defaultGameType = GameTypes.GAME

  constructor (props = {}) {
    super(props)

    this.state = {
      platformInputValue: this.defaultPlatform,
      gameTypeInputValue: this.defaultGameType
    }

    this.controller.updateUserSearchRequest({
      platform: this.defaultPlatform,
      gameType: this.defaultGameType
    })

    this.updateGiveAways()
  }

  updateGiveAways = async () => {
    await this.controller.submitUserSearchRequest()
  }

  handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const platformInputValue = e.target.value as Platforms
    this.setState({ platformInputValue })
    this.controller.updateUserSearchRequest({ platform: platformInputValue })
    this.updateGiveAways()
  }

  handleGameTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gameTypeInputValue = e.target.value as GameTypes
    this.setState({ gameTypeInputValue })
    this.controller.updateUserSearchRequest({ gameType: gameTypeInputValue })
    this.updateGiveAways()
  }

  render = () => {
    return (
      <div className="Search">
        <Paper elevation={1}>
          <h2>Find a game giveaway just for you!</h2>

            <TextField label='Platform' value={this.state.platformInputValue} className='input' fullWidth variant='outlined' select onChange={this.handlePlatformChange}>
              <MenuItem value={Platforms.PC}>PC</MenuItem>
              <MenuItem value={Platforms.STEAM}>Steam</MenuItem>
              <MenuItem value={Platforms.EPIC}>Epic</MenuItem>
              <MenuItem value={Platforms.UBISOFT}>Ubisoft</MenuItem>
              <MenuItem value={Platforms.ITCHIO}>Itch.io</MenuItem>
              <MenuItem value={Platforms.PS4}>PS4</MenuItem>
              <MenuItem value={Platforms.XBOXONE}>Xbox One</MenuItem>
              <MenuItem value={Platforms.SWITCH}>Switch</MenuItem>
              <MenuItem value={Platforms.ANDROID}>Android</MenuItem>
              <MenuItem value={Platforms.IOS}>iOS</MenuItem>
              <MenuItem value={Platforms.VR}>VR</MenuItem>
              <MenuItem value={Platforms.BATTLENET}>BattleNet</MenuItem>
              <MenuItem value={Platforms.ORIGIN}>Origin</MenuItem>
              <MenuItem value={Platforms.DRMFREE}>DRM-Free</MenuItem>
            </TextField>

            <TextField label='Game Type' value={this.state.gameTypeInputValue} className='input' fullWidth variant='outlined' select onChange={this.handleGameTypeChange}>
              <MenuItem value={GameTypes.GAME}>Game</MenuItem>
              <MenuItem value={GameTypes.LOOT}>Loot</MenuItem>
              <MenuItem value={GameTypes.BETA}>Beta</MenuItem>
            </TextField>
        </Paper>
      </div>
    )
  }
}

export default Search
