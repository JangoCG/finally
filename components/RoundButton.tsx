import React, {FC} from 'react'
import {Text, TouchableOpacity} from 'react-native'

interface RoundButtonProps {
    backgroundColor: string,
    fontColor: string,
    title: string
    marginTop?: string,
    width?: number,
    fontSize?: number
    height?: number
    onPress: () => void
}

const DEFAULT_MARGIN_TOP = 40;
const DEFAULT_WIDTH = 190;
const RoundButton: FC<RoundButtonProps> = (
    {
        backgroundColor,
        marginTop = DEFAULT_MARGIN_TOP,
        fontColor,
        fontSize=16,
        title,
        width=DEFAULT_WIDTH,
        height=50,
        onPress
    }
) => {
    return (
            <TouchableOpacity
                style={{
                    backgroundColor: backgroundColor,
                    paddingHorizontal: 30,
                    paddingVertical: 5,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop,
                    width,
                    height,

                    //Box Shadow
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                }}
                onPress={() => onPress()}
            >
                <Text style={{
                    fontSize: fontSize,
                    fontWeight: '700',
                    color: fontColor,
                    textAlign: "center"
                }}>{title}</Text>
            </TouchableOpacity>
        // </View>
    )
}

export default RoundButton


