import React, {Component} from 'react';
import './group_page.css';
import {GridList, GridTile, Paper} from 'material-ui';
import GroupBasics from "./GroupBasics";
import GroupFeed from "./GroupFeed";
import GroupChat from "./GroupChat";
import {connect} from "react-redux";
import {getAllGroupPosts} from "../../redux/actions/postGroupActions";




class GroupDisplay extends Component {


    render() {
        return (
            <div className="group-page">
               <GridList cols={4} cellHeight="auto" className="group-gridlist">

                  <GridTile cols={1} className="basics-section">

                          <GroupBasics
                              fetched={this.props.fetched}
                              group={this.props.group}/>

                  </GridTile>

                   <GridTile cols={2} className="group-feed">
                       <GroupFeed/>
                   </GridTile>

                   <GridTile cols={1} className="group-chat">
                       <GroupChat />
                   </GridTile>
               </GridList>
            </div>
        )
    }
}

function mapStateToProps(state, oP){
    console.log(state)
    let group = state.groups.filter(g=>{
        return g.key===oP.match.params.groupId
    });
    return{
        fetched:group[0]!==undefined,
        group:group[0]
    }
}
function mapDispatchToProps(dispatch, oP){
    dispatch(getAllGroupPosts(oP.match.params.groupId));
    return{}
}

GroupDisplay = connect(mapStateToProps, mapDispatchToProps)(GroupDisplay);
export default GroupDisplay;