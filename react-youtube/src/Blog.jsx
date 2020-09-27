import React from "react";
import Article from "./Article";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false,
            order: 1
        }
    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished,
            order: 0
        })
    }

    render() {
        return (
            <>
                <Article title={"What React"}
                         isPublished={this.state.isPublished}
                         toggle={() => this.togglePublished()}
                         order={this.state.order}
                />
            </>
        )
    }
}

export default Blog