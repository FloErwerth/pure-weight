import {useAppSelector} from "@/store";
import {getTheme} from "@/store/settings/selector";
import {themes} from "@/theme/config";

const flavor = "github";
export const useTheme = () => {
    const theme = useAppSelector(getTheme);

    return themes[flavor][theme];
}