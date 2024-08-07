import * as React from 'react';
import { TextInput as TextI } from 'react-native-paper';

const TextInput = (props: any) => {
    const [text, setText] = React.useState("");

    return (
        <TextI
            {...props}
            value={text}
            onChangeText={text => setText(text)}
        />
    );
};

export default TextInput;