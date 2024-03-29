import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, {MenuItem, MenuList} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import {sourceStore, dataStore, selectedNodeStore} from './stores'
//import Subheader from 'material-ui/Subheader';
//import Slider from 'material-ui-slider-label/Slider';
import { cyan500 } from 'material-ui/styles/colors';

const paperStyle = {
    height: '85%',
    width: "100%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

const sliderStyles = {
    subheader: {
        textTransform: 'capitalize',
    },
    labelStyleOuter: {
        width: '30px',
        height: '30px',
        borderRadius: '50% 50% 50% 0',
        background: cyan500,
        position: 'absolute',
        transform: 'rotate(-45deg)',
        top: '-40px',
        left: '-9px',
    },
    labelStyleInner: {
        transform: 'rotate(45deg)',
        color: 'white',
        textAlign: 'center',
        position: 'center',
        top: '3px',
        right: '0px',
        fontSize: '14px',
    },
};

var clickedPaper = null;
var clickedMenu = null;

class ListItems extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            open: false,
            data:  {
                nodes: [],
                links: []
            },
        };
    }

    handleClick = event => {
        clickedMenu = event.currentTarget.id;
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({ anchorEl : null });
        this.setState({open: false});
    }
    render()
    {
        const { anchorEl } = this.state;
        var ind = dataStore.data.nodes.findIndex(n => n.id == selectedNodeStore.node);
        var speechList = [];
        var emoList = [];
        var annoList = [];
        var nameList = [];

        if(ind>-1 && dataStore.data.nodes.length > 0) {
            speechList = dataStore.data.nodes[ind].speech;
            emoList = dataStore.data.nodes[ind].emo;
            annoList = dataStore.data.nodes[ind].anno;
            nameList = dataStore.data.nodes[ind].id;
        }

        console.log(dataStore.data)
        return(
            <div>
                <Menu id="main-menu">
                    < MenuItem id="speeches" onClick={this.handleClick}> Speech < / MenuItem >
                    <Menu>
                    {speechList.map((s,i) => { return (<MenuItem id={s} primaryText={nameList[i] + " : " + speechList[i]} />); })}
                    </Menu>
                    <Divider />
                    < MenuItem id="emotions" onClick={this.handleClick}> Emotion < / MenuItem >
                    <Menu>
                    {emoList.map((s,i) => { return (<div><MenuItem id={s} primaryText={nameList[i] + " : (" + emoList[i] + ") " + annoList[i]} /></div>); })}
                    </Menu>
                </Menu>
            </div>
        );
    };
};


export default ListItems;
