import { useContext } from "../../deps.ts";
import StdinContext from "../components/StdinContext.ts";

/**
 * `useStdin` is a React hook, which exposes stdin stream.
 */
const useStdin = () => useContext(StdinContext);
export default useStdin;
