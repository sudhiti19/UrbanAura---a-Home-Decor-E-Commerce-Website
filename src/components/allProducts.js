import { candles } from "./CandlePage";
import {  clocks } from "./ClockPage";
import { frames } from "./FramePage";
import { mirrors} from "./MirrorPage";
import { plants } from "./PlantPage";
import { shelves } from "./ShelfPage";
import { showpieces} from "./ShowPage";
import { vases } from "./VasePage";

const allProducts = [
  ...candles,
  ...clocks,
  ...frames,
  ...mirrors,
  ...plants,
  ...shelves,
  ...showpieces,
  ...vases,
];

export default allProducts;
