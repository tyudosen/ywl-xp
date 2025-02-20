import LogoImage from '@/assets/images/logo-transp.png'
import { useThemeColor } from '@/hooks/useThemeColor';

const primaryTextColor = useThemeColor({}, "text");
const secondaryColor = useThemeColor({}, "secondary");
const borderColor = useThemeColor({}, "border");
const backgroundColor = useThemeColor({}, "background");
const cardBackgroundColor = useThemeColor({}, "card");

export { LogoImage, primaryTextColor, secondaryColor, borderColor, backgroundColor, cardBackgroundColor } 