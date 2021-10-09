import React from "react";
import './menu.scss'
import { HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menu-wrap">
                <div className="menu-item">
                    <HomeOutlined />
                    <span>首页</span>
                </div>
                <div className="menu-item">
                    <HomeOutlined />
                    <span>首页</span>
                </div>
            </div>
        )
    }
}
