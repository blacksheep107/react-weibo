import React, {Component} from "react";
import Header from "../component/header";
import Page from "./page";
import Menu from "../component/menu";
import PostPanel from "../component/postPanel";
import store from "../../redux/store";
import api from '../../api/app/index';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        store.subscribe(this.stateChange.bind(this));
        api.test().then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    stateChange(){
        this.setState(store.getState());
    }

    render() {
        let Post = null;
        if (store.getState().common.showPostbox) {
            Post = <PostPanel></PostPanel>
        }
        return (
            <div>
                <Header></Header>
                <Page></Page>
                <Menu></Menu>
                {Post}
            </div>
        )
    }
}
