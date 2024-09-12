import { action } from '@storybook/addon-actions';
import { UnControlledAccordion } from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
};

const callback = action("UnControlledAccordion mode changed");
export const ModeChanging = () => {
    return (
        <UnControlledAccordion
            titleValue={"UnControlledAccordionModeChanging "}
        />
    );
};

