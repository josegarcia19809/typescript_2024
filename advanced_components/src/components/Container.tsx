import {ElementType} from "react";

type ContainerProps = {
    as: ElementType
}


function Container({as}: ContainerProps) {
    const Component = as;
    return (
        <Component></Component>
    );
}

export default Container;