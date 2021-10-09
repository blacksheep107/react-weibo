import React from "react";
import './postPanel.scss';
import store from "../../redux/store";
import { CameraOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { TextArea } = Input;
export default class PostPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        store.subscribe(this.storeChange.bind(this));
    }
    storeChange(){
        this.setState(store.getState());
    }
    closePostBox(){
        store.dispatch({
            type: 'UPDATE_POSTBOX',
            showPostbox: false
        });
    }
    render() {
        if(store.getState().common.showPostbox) {
            return (
                <div className={"panel-wrap"}>
                    <div className={"header"}>
                        <p onClick={this.closePostBox.bind(this)}>取消</p>
                        <span>
                            <p>发微博</p>
                            <p></p>
                        </span>
                        <button>发送</button>
                    </div>
                    <div className={"content"}>
                        <TextArea placeholder={"分享新鲜事..."} bordered={false} className={"input"} />
                    </div>
                    <div className={"footer"}>

                    </div>
                </div>
            )
        }
        return null
    }
}
