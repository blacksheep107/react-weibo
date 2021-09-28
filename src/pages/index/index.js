import React, {Component} from "react";
import Header from "../component/header";
import Page from "./page";
import Menu from "../component/menu";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Page></Page>
                <Menu></Menu>
            </div>
        )
    }
}
