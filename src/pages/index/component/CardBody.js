import React from "react";
export default class CardBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="content"></div>
                <div className="pictures"></div>
            </div>
        )
    }
}
