import React from 'react';
import proptypes from 'prop-types';

export default class Index extends React.Component {

    static defaultProps={
        showText:'0'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.showText}</div>
    }

}