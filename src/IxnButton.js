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
                    alert();
                    tag.props.onClick(e);
                }
            },
        ))
    }
}

export const IxnButton2 = props => {
    const newProps = Object.assign({}, props)
    newProps.className = props.className + " sharp"
    newProps.onClick = e => {
        alert(1);
        if (props.onClick) {
            props.onClick(e)
        }
    }
    return <Button {...newProps} />
}

export const IxnButton3 = props => {
    const newProps = {
        ...props,
        className: props.className + " sharp",
        onClick: e => {
            alert(1);
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
