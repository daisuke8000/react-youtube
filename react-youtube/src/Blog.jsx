import React from "react";
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

const Blog = () => {
    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         this.setState({count: 0})
    //     } else if (this.state.bad >= 10) {
    //         this.setState({bad: 0})
    //     }
    // }
    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click', this.countUp)
    //     document.getElementById('bad').removeEventListener('click', this.badUp)
    // }
    //
    // componentDidMount() {
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    //     document.getElementById('bad').addEventListener('click', this.badUp)
    // }
    // countUp = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    //
    // badUp = () => {
    //     this.setState({
    //         bad: this.state.bad + 1
    //     })
    // }
    return (
        <>
            <Article title={"What React"}
                // count={this.state.count}
            />
            <FooBar.Foo/>
            <FooBar.Bar/>
            <Hoge/>
        </>
    )
}

export default Blog