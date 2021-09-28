import React from "react";
import CardHeader from "./CardHeader";
export default class CardBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <CardHeader></CardHeader>
            </div>
        )
    }
}
