import React from 'react';
import { I18nManager, Text, TextProps, TextStyle } from 'react-native';
import { colors } from '../../config/colors';
interface props {
    color?: string;
    font?: fontType;
    size?: fontType;
    center?: boolean;
    textStyle?: TextStyle;
    props?: TextProps;
}
type fontType = 'md' | 'lg' | 'sm';
export const fonts = {
    md: ['Inter_500Medium', 'Cairo_600SemiBold'],
    lg: ['Inter_700Bold', 'Cairo_700Bold'],
    sm: ['Inter_400Regular', 'Cairo_400Regular'],
};
export const index = I18nManager.isRTL ? 1 : 0;
const AppText: React.FC<props> = ({ color: c, font, size, children, center, textStyle, props }) => {
    const color = c ? c : colors.txt;
    const fontFamily = font === 'md' ? fonts.md[index] : font === 'lg' ? fonts.lg[index] : fonts.sm[index];
    const fontSize = size === 'md' ? 18 : size === 'lg' ? 24 : 16;
    return (
        <Text
            style={[
                {
                    color,
                    fontFamily,
                    fontSize,
                    textAlign: center ? 'center' : 'left',
                },
                textStyle,
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

export default AppText;
