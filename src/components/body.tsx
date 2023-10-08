import React, {ReactNode} from 'react';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

interface propsBody {
    children?: ReactNode;
}

export default function Body (props: propsBody) {
    return <div className="bg-secondarylight">
        <div className="container bg-white">
            {props.children}
            {lorem.generateParagraphs(70)}
        </div>
    </div>
}