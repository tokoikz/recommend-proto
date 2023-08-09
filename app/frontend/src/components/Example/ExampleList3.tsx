import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "香水A",
        value: "香水A：10"
    },
    {
        text: "香水B",
        value: "香水AB：25"
    },
    {
        text: "香水C",
        value: "香水C：55"
    },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList3 = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
