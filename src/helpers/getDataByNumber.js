
import { data } from "../data/data";

export function getDataByNumber(number) {
    return data.find((el) => el.number == number)
}
