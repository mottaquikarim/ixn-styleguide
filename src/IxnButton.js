import React from 'react';
import { Button } from 'reactstrap';
import './IxnButton.css';

export class IxnButton extends Button {
    render() {
        const tag = super.render();
        return React.cloneElement(tag, Object.assign({},
            tag.props,
            {
                className: 'sharp ' + tag.props.className,
                onClick: e => {
                    alert("This is run within IxnButton component which extends Button");
                    tag.props.onClick(e);
                }
            },
        ))
    }
}

export const IxnButtonComp = props => {
    const newProps = {
        ...props,
        className: props.className + " sharp",
        onClick: e => {
            alert("This is run within IxnButtonComp component, which __composes__ Button");
            if (props.onClick) {
                props.onClick(e)
            }
        },
        style: Object.assign({}, props.style, {
            "backgroundColor": "pink",
        }),
    }

    return <Button {...newProps} />
}
