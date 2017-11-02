import React, {Component} from 'react';
import './group_page.css';
import {GridList, GridTile, Paper} from 'material-ui';
import GroupBasics from "./GroupBasics";
import GroupFeed from "./GroupFeed";
import GroupChat from "./GroupChat";



class GroupDisplay extends Component {
    render() {
        return (
            <div className="group-page" >
               <GridList cols={4} cellHeight="auto" className="group-gridlist">

                  <GridTile cols={1} className="basics-section">

                          <GroupBasics/>

                  </GridTile>

                   <GridTile cols={2} className="group-feed">
                       <GroupFeed/>
                   </GridTile>

                   <GridTile cols={1} className="group-chat">
                       <GroupChat/>
                   </GridTile>
               </GridList>
            </div>
        )
    }
}

export default GroupDisplay;