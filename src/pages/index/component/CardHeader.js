import React from "react";
export default class CardHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img/>
                <div>
                    <div className="name"></div>
                    <div className="time"></div>
                </div>
                <div className="popbtn"></div>
            </div>
        )
    }
}
