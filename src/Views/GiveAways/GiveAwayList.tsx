import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Component } from 'react'
import GiveAway from '../../Entities/GiveAway/GiveAway'
import './GiveAwayList.css'

interface GiveAwayListState {
  giveAways: GiveAway[]
}

class GiveAwayList extends Component<{}, GiveAwayListState> {
  constructor(props = {}) {
    super(props)

    this.state = { giveAways: [] }

    document.addEventListener('updatedGiveAwayList', (e: CustomEventInit) => { this.updateGiveAwayList(e.detail as GiveAway[]) })
  }

  updateGiveAwayList = (giveAways: GiveAway[]) => {
    if (Array.isArray(giveAways) && giveAways.length) this.setState({ giveAways })
    else this.setState({ giveAways: [] })
  }

  renderGiveAwayRows = () => {
    const giveAways: GiveAway[] = this.state.giveAways
    const tableBody = <TableBody>
      {giveAways.map(ga => <TableRow>
        <TableCell align='left'>{ ga.title }</TableCell>
        <TableCell align='right'>{ ga.worth }</TableCell>
      </TableRow>
      )}
    </TableBody>

    return tableBody
  }

  render = () => {
    return (
      <div className="GiveAwayList">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Title</TableCell>
                <TableCell align='right'>Worth</TableCell>
              </TableRow>
            </TableHead>

            { this.renderGiveAwayRows() }

          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default GiveAwayList
