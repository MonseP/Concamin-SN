import React, {Component} from 'react';
import './group_page.css';
import {GridList, GridTile, Paper} from 'material-ui';
import GroupBasics from "./GroupBasics";



class GroupDisplay extends Component {
    render() {
        return (
            <div className="group-page" >
               <GridList cols={4} cellHeight="auto">
                   <GridTile cols={1}>
                       <Paper zDepth={3} classname="basics-section">
                           <GroupBasics/>
                       </Paper>
                   </GridTile>
                   <GridTile cols={3}>
                       chat, posts, etc
                   </GridTile>
               </GridList>
            </div>
        )
    }
}

export default GroupDisplay;