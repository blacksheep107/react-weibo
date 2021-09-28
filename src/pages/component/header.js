import React from "react";
import './header.scss';
import { CameraOutlined, PlusCircleOutlined } from '@ant-design/icons';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="header-wrap">
                <CameraOutlined className="icon" />
                <span>最新微博</span>
                <span>推荐</span>
                <PlusCircleOutlined className="icon" />
            </div>
        )
    }
}
