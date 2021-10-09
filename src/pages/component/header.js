import React from "react";
import './header.scss';
import { CameraOutlined, PlusCircleOutlined } from '@ant-design/icons';
import store from "../../redux/store";
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    showPostMessage(){
        store.dispatch({
            type: 'UPDATE_POSTBOX',
            showPostbox: true
        });
    }
    render() {
        return (
            <div className="header-wrap">
                <CameraOutlined className="icon" />
                <span>最新微博</span>
                <span>推荐</span>
                <PlusCircleOutlined onClick={this.showPostMessage.bind(this)} className="icon" />
            </div>
        )
    }
}
